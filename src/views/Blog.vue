<template>
  <div>
    <div class="blog-header">
      <h1>技术博客</h1>
      <div class="tag-filter">
        <button
          v-for="tag in blogTags"
          :key="tag.id"
          :class="['tag-btn', { active: selectedTag === tag.id }]"
          :style="{ '--tag-color': tag.color }"
          @click="selectedTag = tag.id"
        >
          {{ tag.name }}
        </button>
      </div>
    </div>

    <div class="articles-list">
      <article
        v-for="article in filteredArticles"
        :key="article.id"
        class="article-card"
        @click="goToArticle(article.id)"
      >
        <h2>{{ article.title }}</h2>
        <div class="article-meta">
          <span>📅 {{ article.date }}</span>
          <span class="article-tags">
            <span
              v-for="tagId in article.tags"
              :key="tagId"
              class="tag"
              :style="{ backgroundColor: getTagColor(tagId) }"
            >
              {{ getTagName(tagId) }}
            </span>
          </span>
        </div>
        <p>{{ article.excerpt }}</p>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { articles, blogTags } from '../data'

const router = useRouter()
const selectedTag = ref('all')

const filteredArticles = computed(() => {
  if (selectedTag.value === 'all') {
    return articles
  }
  return articles.filter(a => a.tags.includes(selectedTag.value))
})

const getTagName = (tagId) => {
  const tag = blogTags.find(t => t.id === tagId)
  return tag ? tag.name : tagId
}

const getTagColor = (tagId) => {
  const tag = blogTags.find(t => t.id === tagId)
  return tag ? tag.color : '#ccc'
}

const goToArticle = (id) => {
  router.push(`/article/${id}`)
}
</script>

<style scoped>
.blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.blog-header h1 {
  color: var(--accent);
  font-size: 2rem;
  margin: 0;
}

.tag-filter {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag-btn {
  padding: 0.4rem 1rem;
  border: 2px solid var(--tag-color);
  background: transparent;
  color: var(--tag-color);
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.tag-btn.active,
.tag-btn:hover {
  background: var(--tag-color);
  color: var(--bg-primary);
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.article-card {
  background: var(--bg-card);
  border: 4px solid var(--border-color);
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.article-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.article-card h2 {
  color: var(--text-primary);
  margin: 0 0 0.5rem;
  font-size: 1.4rem;
}

.article-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.article-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  color: var(--bg-primary);
}

.article-card p {
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .blog-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>
