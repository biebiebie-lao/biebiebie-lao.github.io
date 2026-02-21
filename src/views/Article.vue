<template>
  <article class="article-detail">
    <router-link :to="backLink" class="back-link">{{ backText }}</router-link>
    <div v-if="article">
      <h1>{{ article.title }}</h1>
      <div class="meta">
        <template v-if="isProject">
          <span>🔧</span>
          <span
            v-for="tech in article.tech"
            :key="tech"
            class="tag"
          >
            {{ tech }}
          </span>
        </template>
        <template v-else>
          <span>📅 {{ article.date }}</span>
          <span style="margin-left: 1rem;">
            🏷️
            <span
              v-for="tag in article.tags"
              :key="tag.id"
              class="tag"
              :style="{ backgroundColor: tag.color }"
            >
              {{ tag.name }}
            </span>
          </span>
        </template>
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
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getArticleDetail, loadArticleContent } from '../services/articleService'
import { getProjectDetail, loadProjectContent } from '../services/projectService'

const route = useRoute()
const router = useRouter()
const article = ref(null)
const content = ref('')

// 判断是文章还是项目
const isProject = computed(() => route.path.startsWith('/project'))

const loadContent = async () => {
  const id = parseInt(route.params.id)

  if (isProject.value) {
    // 项目详情
    article.value = getProjectDetail(id)
    if (article.value) {
      content.value = await loadProjectContent(id)
    }
  } else {
    // 文章详情
    article.value = getArticleDetail(id)
    if (article.value) {
      content.value = await loadArticleContent(id)
    }
  }
}

// 返回链接 - 根据上一页判断
const backLink = computed(() => {
  if (!isProject.value) {
    return '/blog'
  }
  // 获取上一页路径
  const from = router.options.history.state.back
  // 如果上一页是首页('/', '' 或 undefined)，返回首页
  if (from === '/' || from === '' || from === undefined) {
    return '/'
  }
  return '/projects'
})

const backText = computed(() => {
  if (!isProject.value) {
    return '← 返回博客列表'
  }
  const from = router.options.history.state.back
  if (from === '/' || from === '' || from === undefined) {
    return '← 返回首页'
  }
  return '← 返回项目列表'
})

onMounted(loadContent)
watch(() => route.params.id, loadContent)
watch(() => route.path, loadContent)
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
