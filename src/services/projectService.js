// 项目服务
import { projects } from '../data/projects'

export const getProjects = () => projects

export const getProjectById = (id) => projects.find(p => p.id === id)
