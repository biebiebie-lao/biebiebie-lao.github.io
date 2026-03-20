<template>
  <article class="article-detail">
    <router-link to="/projects" class="back-link">← 返回项目列表</router-link>
    <div v-if="loading" class="loading">加载中...</div>
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="loadContent" class="retry-button">重试</button>
    </div>
    <div v-else-if="article">
      <h1>{{ article.title }}</h1>
      <div class="meta">
        <span>🔧</span>
        <span
          v-for="tech in article.tech"
          :key="tech"
          class="tag"
        >
          {{ tech }}
        </span>
      </div>
      <div class="content" v-html="sanitizedContent"></div>
    </div>
    <div v-else>
      <h1>项目未找到</h1>
      <p>抱歉，您要查看的项目不存在。</p>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectDetail, loadProjectContent } from '../services/projectService'
import DOMPurify from 'dompurify'

const route = useRoute()
const article = ref(null)
const content = ref('')
const loading = ref(true)
const error = ref(null)

// 消毒后的内容，防止 XSS
const sanitizedContent = computed(() => {
  return DOMPurify.sanitize(content.value)
})

const loadContent = async () => {
  loading.value = true
  error.value = null
  const id = parseInt(route.params.id)

  // 项目详情
  article.value = getProjectDetail(id)
  if (article.value) {
    try {
      content.value = await loadProjectContent(id)
    } catch (e) {
      error.value = e.message
    }
  }
  loading.value = false
}

onMounted(loadContent)
watch(() => route.params.id, loadContent)
</script>

<style scoped>
.article-detail {
  max-width: 800px;
  margin: 0 auto;
}

.loading {
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
}

.error {
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
}

.error p {
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.retry-button {
  padding: 0.5rem 1.5rem;
  background-color: var(--accent);
  color: var(--bg-primary);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.retry-button:hover {
  opacity: 0.9;
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
