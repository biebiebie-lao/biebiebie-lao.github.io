// 简历服务 - 解析 resume.md 文件

let resumeCache = null

// 解析一句话介绍
const parseIntro = (content) => {
  const match = content.match(/## 一句话介绍\n([^\n]+)/)
  return match ? match[1].trim() : ''
}

// 解析教育背景
const parseEducation = (content) => {
  const education = {}
  const schoolMatch = content.match(/- 学校：(.+)/)
  const majorMatch = content.match(/- 专业：(.+)/)
  const degreeMatch = content.match(/- 学历：(.+)/)
  const gradeMatch = content.match(/- 年级：(.+)/)

  if (schoolMatch) education.school = schoolMatch[1].trim()
  if (majorMatch) education.major = majorMatch[1].trim()
  if (degreeMatch) education.degree = degreeMatch[1].trim()
  if (gradeMatch) education.grade = gradeMatch[1].trim()

  return education
}

// 解析技能标签
const parseSkills = (content) => {
  const skills = {
    languages: [],
    embedded: [],
    ai: [],
    tools: []
  }

  // 解析各个分类
  const langMatch = content.match(/### 编程语言\n(.+?)(?=###|$)/s)
  const embedMatch = content.match(/### 嵌入式\n(.+?)(?=###|$)/s)
  const aiMatch = content.match(/### AI\/机器学习\n(.+?)(?=###|$)/s)
  const toolMatch = content.match(/### 工具与其他\n(.+?)(?=##|$)/s)

  if (langMatch) {
    skills.languages = langMatch[1].split('、').map(s => s.trim()).filter(s => s && s !== '[在此填入]')
  }
  if (embedMatch) {
    skills.embedded = embedMatch[1].split('、').map(s => s.trim()).filter(s => s && s !== '[在此填入]')
  }
  if (aiMatch) {
    skills.ai = aiMatch[1].split('、').map(s => s.trim()).filter(s => s && s !== '[在此填入]')
  }
  if (toolMatch) {
    skills.tools = toolMatch[1].split('、').map(s => s.trim()).filter(s => s && s !== '[在此填入]')
  }

  return skills
}

// 解析项目经历
const parseProjects = (content) => {
  const projects = []
  const projectRegex = /### 项目[一二三]\n- 名称：([^\n]+)\n- 描述：([^\n]+)\n- 技术栈：([^\n]+)\n- GitHub链接：([^\n]*)/g

  let match
  while ((match = projectRegex.exec(content)) !== null) {
    const techStr = match[3].trim()
    projects.push({
      name: match[1].trim(),
      description: match[2].trim(),
      tech: techStr && techStr !== '[技术标签，用逗号分隔]' ? techStr.split('、').map(s => s.trim()).filter(s => s) : [],
      github: match[4].trim() || null
    })
  }

  return projects
}

// 解析联系方式
const parseContact = (content) => {
  const contact = {}
  const githubMatch = content.match(/- GitHub：(.+)/)
  const emailMatch = content.match(/- 邮箱：(.+)/)
  const wechatMatch = content.match(/- 微信：(.+)/)

  if (githubMatch) contact.github = githubMatch[1].trim()
  if (emailMatch) contact.email = emailMatch[1].trim()
  if (wechatMatch) contact.wechat = wechatMatch[1].trim()

  return contact
}

// 解析整个 resume
export const parseResume = async () => {
  if (resumeCache) {
    return resumeCache
  }

  try {
    const response = await fetch('/resume.md')
    if (!response.ok) {
      throw new Error('Failed to load resume.md')
    }
    const content = await response.text()

    resumeCache = {
      intro: parseIntro(content),
      education: parseEducation(content),
      skills: parseSkills(content),
      projects: parseProjects(content),
      contact: parseContact(content)
    }

    return resumeCache
  } catch (error) {
    console.error('Error loading resume:', error)
    return {
      intro: '',
      education: {},
      skills: {},
      projects: [],
      contact: {}
    }
  }
}

export const getIntro = () => parseResume().then(r => r.intro)

export const getEducation = () => parseResume().then(r => r.education)

export const getSkills = () => parseResume().then(r => r.skills)

export const getProjects = () => parseResume().then(r => r.projects)

export const getContact = () => parseResume().then(r => r.contact)
