// 配置服务
import { siteConfig } from '../data/config'

export const getConfig = () => siteConfig

export const getSiteName = () => siteConfig.name

export const getSiteTitle = () => siteConfig.title

export const getGithubUrl = () => siteConfig.github

export const getEmail = () => siteConfig.email

export const getWechat = () => siteConfig.wechat

export const getAvatar = () => siteConfig.avatar
