// 标签服务
import { tags } from '../data/tags'

export const getAllTags = () => tags

export const getTagById = (id) => tags.find(t => t.id === id)

export const getTagName = (id) => {
  const tag = getTagById(id)
  return tag ? tag.name : id
}

export const getTagColor = (id) => {
  const tag = getTagById(id)
  return tag ? tag.color : '#ccc'
}

// 获取标签列表（包含名称和颜色）
export const getTagsWithInfo = (tagIds) => {
  return tagIds.map(id => ({
    id,
    name: getTagName(id),
    color: getTagColor(id)
  }))
}
