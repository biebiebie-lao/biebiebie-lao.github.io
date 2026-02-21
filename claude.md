# 老鳖的个人网站

## 项目概述

基于 Vue 3 + Vite 的个人技术博客，像素科技风格。

- **GitHub**: lao-biebiebie
- **网站地址**: https://biebiebie-lao.github.io/
- **内容定位**: 嵌入式 + 人工智能

## 技术栈

- Vue 3 + Vite
- Vue Router 4
- 原生 CSS（像素风格）
- Markdown 文章

## 文件结构

```
.
├── src/
│   ├── views/           # 页面组件
│   │   ├── Home.vue     # 首页
│   │   ├── Blog.vue     # 博客列表
│   │   ├── Article.vue  # 文章/项目详情
│   │   ├── Projects.vue # 项目展示
│   │   └── About.vue    # 关于页面
│   ├── components/      # 公共组件
│   │   └── NavBar.vue   # 导航栏
│   ├── services/        # 服务层（业务逻辑）
│   │   ├── configService.js   # 配置服务
│   │   ├── tagService.js      # 标签服务
│   │   ├── articleService.js  # 文章服务
│   │   └── projectService.js # 项目服务
│   ├── data/            # 数据层（纯数据定义）
│   │   ├── config.js    # 站点配置
│   │   ├── tags.js     # 标签定义
│   │   ├── articles.js # 文章元数据
│   │   └── projects.js # 项目数据
│   ├── router/          # 路由配置
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── public/
│   ├── articles/        # Markdown 文章
│   │   ├── 1.md
│   │   ├── 2.md
│   │   └── ...
│   ├── projects/        # Markdown 项目详情
│   │   ├── 1.md
│   │   ├── 2.md
│   │   └── ...
│   └── assets/
│       ├── turtle.svg   # 像素乌龟 Logo
│       └── avatar.jpg   # 个人头像
├── docs/                # GitHub Pages 部署目录
├── vite.config.js
└── package.json
```

## 架构说明

项目采用三层架构设计：

| 层次 | 目录 | 职责 |
|------|------|------|
| 视图层 | `views/` | 只负责 UI 展示，不含业务逻辑 |
| 服务层 | `services/` | 业务逻辑、数据处理、API 调用 |
| 数据层 | `data/` | 纯数据定义，无任何逻辑 |

### 依赖关系

- Views 依赖 Services，不直接访问 Data
- Services 依赖 Data，也可以相互依赖
- Data 层不依赖任何其他层

## 内容管理

- **博客数据**: `src/data/articles.js` → `articles` 数组
- **项目数据**: `src/data/projects.js` → `projects` 数组
- **标签配置**: `src/data/tags.js` → `tags` 数组
- **站点配置**: `src/data/config.js` → `siteConfig` 对象
- **Markdown 文章**: `public/articles/` 目录
- **Markdown 项目详情**: `public/projects/` 目录

## 开发命令

```bash
npm install     # 安装依赖
npm run dev     # 开发服务器
npm run build   # 构建生产版本
```

## 部署到 GitHub Pages

**重要：每次 commit 前都必须构建并更新 docs/ 目录，commit 的内容必须是网站可直接运行的文件。**

```bash
# 1. 构建项目
npm run build

# 2. 复制构建结果到 docs 目录
cp -r dist/* docs/

# 3. 提交更改（包括 docs/ 目录）
git add .
git commit -m "更新内容"

# 4. 推送到远程
git push origin main
```

或者使用快捷命令：
```bash
npm run build && cp -r dist/* docs/ && git add . && git commit -m "更新内容" && git push origin main
```

**关键点：docs/ 目录才是 GitHub Pages 部署的内容，源代码本身不会直接部署到网站。**
