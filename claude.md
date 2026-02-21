# 老鳖的个人网站

## 项目概述

基于 GitHub Pages 的个人技术博客，像素科技风格。

- **GitHub**: lao-biebiebie
- **网站名称**: 老鳖的个人网站
- **内容定位**: 嵌入式 + 人工智能

## 技术栈

- HTML5 + CSS3 + 原生 JavaScript
- 像素风格 SVG 图标
- 响应式设计

## 文件结构

```
.
├── index.html          # 首页
├── blog.html          # 博客列表
├── article.html       # 文章详情
├── projects.html      # 项目展示
├── about.html         # 关于页面
├── README.md          # 项目说明
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── script.js      # 脚本文件（数据配置）
└── assets/
    ├── turtle.svg     # 像素乌龟Logo
    └── avatar.jpg     # 个人头像（需用户添加）
```

## 内容管理

- **博客数据**: `js/script.js` → `articles` 数组
- **项目数据**: `js/script.js` → `projects` 数组
- **标签配置**: `js/script.js` → `blogTags` 数组（可扩展）
- **个人信息**: `about.html` 中修改

## 待完成

- [ ] 上传个人头像 (`assets/avatar.jpg`)
- [ ] 修改联系方式（邮箱、微信号）
- [ ] 添加真实博客文章
- [ ] 添加个人项目
- [ ] 部署到 GitHub Pages
