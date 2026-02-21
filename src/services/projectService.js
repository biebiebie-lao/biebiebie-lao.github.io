// 项目服务
import { projects } from '../data/projects'
import { marked } from 'marked'

export const getProjects = () => projects

export const getProjectById = (id) => projects.find(p => p.id === id)

// 获取项目详情
export const getProjectDetail = (id) => getProjectById(id)

// 加载项目 Markdown 内容
export const loadProjectContent = async (id) => {
  try {
    const response = await fetch(`/projects/${id}.md`)
    if (!response.ok) {
      throw new Error('Project not found')
    }
    const md = await response.text()
    return marked(md)
  } catch (e) {
    return '<p>项目详情加载失败</p>'
  }
}
