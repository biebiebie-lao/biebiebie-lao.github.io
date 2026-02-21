<template>
  <div>
    <h1 class="page-title">项目展示</h1>
    <p style="text-align: center; color: var(--text-secondary); margin-bottom: 2rem;">
      展示嵌入式与人工智能相关的个人项目
    </p>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <div class="tech-tags">
          <span v-for="tech in project.tech" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
        <div class="project-links">
          <a :href="project.github" target="_blank" class="project-link">
            GitHub
          </a>
          <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link">
            在线演示
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getProjects } from '../services/projectService'

const projects = getProjects()
</script>

<style scoped>
.page-title {
  color: var(--accent);
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-card);
  border: 4px solid var(--border-color);
  padding: 1.5rem;
  transition: all 0.2s;
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}

.project-card h2 {
  color: var(--text-primary);
  margin: 0 0 1rem;
  font-size: 1.3rem;
}

.project-card p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: var(--bg-secondary);
  color: var(--accent);
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
  border: 2px solid var(--accent);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
}

.project-link:hover {
  color: var(--accent);
}
</style>
