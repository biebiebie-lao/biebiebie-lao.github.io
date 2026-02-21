# 老鳖的个人网站

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
│   │   ├── Article.vue  # 文章详情
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
│   │   ├── tags.js      # 标签定义
│   │   ├── articles.js  # 文章元数据
│   │   └── projects.js  # 项目数据
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
│   └── assets/
│       ├── avatar.jpg   # 个人头像
│       └── turtle.svg   # 像素乌龟 Logo
├── docs/                # GitHub Pages 部署目录
├── vite.config.js
└── package.json
```

## 开发

```bash
npm install
npm run dev
```

## 部署

**重要：每次推送前都必须构建并更新 docs/ 目录，否则网站不会更新。**

```bash
# 1. 构建项目
npm run build

# 2. 复制构建结果到 docs 目录
cp -r dist/* docs/

# 3. 提交更改
git add docs/
git commit -m "更新内容"

# 4. 推送到远程
git push origin main
```

或者使用快捷命令：
```bash
npm run build && cp -r dist/* docs/ && git add docs/ && git commit -m "更新内容" && git push origin main
```

## 内容管理

### 添加新文章

1. 在 `public/articles/` 创建 `.md` 文件（如 `5.md`）
2. 在 `src/data/articles.js` 的 `articles` 数组添加条目

### 修改个人信息

首页和个人信息通过 `public/resume.md` 管理，修改后网站会自动更新：
- 一句话介绍
- 教育背景（学校、专业、学历、年级）
- 技能标签（编程语言、嵌入式、AI/机器学习、工具）
- 项目经历（名称、描述、技术栈、GitHub 链接）
- 联系方式

About 页面头像放在 `public/assets/me.jpg`

### 添加新项目

- 在 `src/data/projects.js` 的 `projects` 数组添加条目

### 修改标签

- 在 `src/data/tags.js` 中添加或修改标签

## 架构说明

项目采用三层架构设计：

| 层次 | 目录 | 职责 |
|------|------|------|
| 视图层 | `views/` | 只负责 UI 展示，不含业务逻辑 |
| 服务层 | `services/` | 业务逻辑、数据处理、API 调用 |
| 数据层 | `data/` | 纯数据定义，无任何逻辑 |

