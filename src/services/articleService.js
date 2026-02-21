// 文章服务
import { articles } from '../data/articles'
import { getTagsWithInfo, getTagName, getTagColor } from './tagService'
import { marked } from 'marked'

// 获取所有文章
export const getArticles = () => articles

// 根据 ID 获取文章
export const getArticleById = (id) => articles.find(a => a.id === id)

// 获取带标签信息的文章列表（视图专用）
export const getArticlesWithTags = () => {
  return articles.map(article => ({
    ...article,
    tags: getTagsWithInfo(article.tags)
  }))
}

// 过滤文章
export const filterArticles = (tagId) => {
  const allArticles = getArticlesWithTags()
  if (tagId === 'all') return allArticles
  return allArticles.filter(article =>
    article.tags.some(tag => tag.id === tagId)
  )
}

// 获取文章详情（带标签信息）
export const getArticleDetail = (id) => {
  const article = getArticleById(id)
  if (!article) return null
  return {
    ...article,
    tags: getTagsWithInfo(article.tags)
  }
}

// 加载 Markdown 内容
export const loadArticleContent = async (id) => {
  try {
    const response = await fetch(`/articles/${id}.md`)
    if (!response.ok) {
      throw new Error('Article not found')
    }
    const md = await response.text()
    return marked(md)
  } catch (e) {
    return '<p>文章内容加载失败</p>'
  }
}
