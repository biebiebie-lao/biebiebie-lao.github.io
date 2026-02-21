<template>
  <article class="article-detail">
    <router-link to="/blog" class="back-link">← 返回博客列表</router-link>
    <div v-if="article">
      <h1>{{ article.title }}</h1>
      <div class="meta">
        <span>📅 {{ article.date }}</span>
        <span style="margin-left: 1rem;">
          🏷️
          <span
            v-for="tagId in article.tags"
            :key="tagId"
            class="tag"
            :style="{ backgroundColor: getTagColor(tagId) }"
          >
            {{ getTagName(tagId) }}
          </span>
        </span>
      </div>
      <div class="content" v-html="content"></div>
    </div>
    <div v-else>
      <h1>文章未找到</h1>
      <p>抱歉，您要查看的文章不存在。</p>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import { articles, blogTags } from '../data'

const route = useRoute()
const article = ref(null)
const content = ref('')

const getTagName = (tagId) => {
  const tag = blogTags.find(t => t.id === tagId)
  return tag ? tag.name : tagId
}

const getTagColor = (tagId) => {
  const tag = blogTags.find(t => t.id === tagId)
  return tag ? tag.color : '#ccc'
}

const loadArticle = async () => {
  const id = parseInt(route.params.id)
  article.value = articles.find(a => a.id === id)

  if (article.value) {
    try {
      const response = await fetch(`/articles/${id}.md`)
      if (response.ok) {
        const md = await response.text()
        content.value = marked(md)
      } else {
        content.value = '<p>文章内容加载中...</p>'
      }
    } catch (e) {
      content.value = '<p>文章内容加载中...</p>'
    }
  }
}

onMounted(loadArticle)
watch(() => route.params.id, loadArticle)
</script>

<style scoped>
.article-detail {
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  text-decoration: none;
}

.back-link:hover {
  color: var(--accent);
}

h1 {
  color: var(--accent);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.meta {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--border-color);
}

.tag {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: var(--bg-primary);
}

.content {
  line-height: 1.8;
  color: var(--text-secondary);
}

.content :deep(h2) {
  color: var(--text-primary);
  margin: 2rem 0 1rem;
  font-size: 1.4rem;
}

.content :deep(p) {
  margin-bottom: 1.5rem;
}

.content :deep(code) {
  background-color: var(--bg-card);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}

.content :deep(pre) {
  background-color: var(--bg-card);
  padding: 1rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
  border: 2px solid var(--border-color);
}

.content :deep(pre code) {
  background: none;
  padding: 0;
}

.content :deep(ul),
.content :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.content :deep(li) {
  margin-bottom: 0.5rem;
}

.content :deep(strong) {
  color: var(--text-primary);
}
</style>
