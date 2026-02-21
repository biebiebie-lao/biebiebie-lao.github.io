<template>
  <article class="article-detail">
    <router-link to="/blog" class="back-link">← 返回博客列表</router-link>
    <div v-if="article">
      <h1>{{ article.title }}</h1>
      <div class="meta">
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
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleDetail, loadArticleContent } from '../services/articleService'

const route = useRoute()
const article = ref(null)
const content = ref('')

const loadArticle = async () => {
  const id = parseInt(route.params.id)
  article.value = getArticleDetail(id)

  if (article.value) {
    content.value = await loadArticleContent(id)
  }
}

onMounted(loadArticle)
watch(() => route.params.id, loadArticle)
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
