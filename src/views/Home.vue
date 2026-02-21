<template>
  <div class="home">
    <!-- 头像区域 -->
    <div class="avatar-section">
      <div class="turtle-container">
        <img src="/assets/turtle.svg" alt="logo" class="turtle-pixel">
      </div>
      <h1 class="site-title">老鳖的个人网站</h1>
      <p class="intro">一名热爱嵌入式开发和人工智能的学生</p>
    </div>

    <!-- 联系方式 -->
    <section class="section contact-section">
      <div class="contact-bar">
        <a href="tel:13939216622" class="contact-link">📞 13939216622</a>
        <span class="contact-sep">|</span>
        <a href="mailto:2023012418@bsu.edu.cn" class="contact-link">✉️ 2023012418@bsu.edu.cn</a>
      </div>
    </section>

    <!-- 教育背景 -->
    <section class="section education-section">
      <div class="education-card">
        <p><strong>学校：</strong>北京体育大学</p>
        <p><strong>专业：</strong>智能体育工程</p>
        <p><strong>学历：</strong>本科 · 2023级</p>
      </div>
    </section>

    <!-- 技能标签 -->
    <section class="section skills-section">
      <div class="skills-grid">
        <div class="skill-category">
          <h3>编程语言</h3>
          <div class="skill-tags">
            <span class="skill-tag">C/C++</span>
            <span class="skill-tag">Python</span>
          </div>
        </div>
        <div class="skill-category">
          <h3>嵌入式</h3>
          <div class="skill-tags">
            <span class="skill-tag">STM32</span>
            <span class="skill-tag">ESP32</span>
            <span class="skill-tag">RDK X5</span>
          </div>
        </div>
        <div class="skill-category">
          <h3>AI/机器学习</h3>
          <div class="skill-tags">
            <span class="skill-tag">LLM</span>
            <span class="skill-tag">RL</span>
          </div>
        </div>
        <div class="skill-category">
          <h3>工具与其他</h3>
          <div class="skill-tags">
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Linux</span>
            <span class="skill-tag">Docker</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目展示 -->
    <section class="section projects-section">
      <div class="projects-list">
        <div
          v-for="project in homeProjects"
          :key="project.id"
          class="project-card pixel-border"
          @click="goToDetail(project.id)"
        >
          <h3 class="project-name">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { getProjects } from '../services/projectService'

const router = useRouter()
const projects = getProjects()

// 首页只显示前3个项目
const homeProjects = computed(() => projects.slice(0, 3))

const goToDetail = (id) => {
  router.push(`/project/${id}`)
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* 头像区域 */
.avatar-section {
  text-align: center;
  margin-bottom: 3rem;
}

.turtle-container {
  width: 120px;
  height: 120px;
  margin: 0 auto 1rem;
}

.turtle-pixel {
  width: 100%;
  height: 100%;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.site-title {
  font-size: 2rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.intro {
  font-size: 1.2rem;
  color: var(--text-secondary);
}

/* 通用区块 */
.section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 1.4rem;
  color: var(--accent);
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  border-left: 4px solid var(--accent);
}

/* 教育背景 */
.education-card {
  background: var(--bg-card);
  padding: 1.5rem;
  border: 4px solid var(--border-color);
}

.education-card p {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.education-card strong {
  color: var(--accent);
}

/* 联系方式 */
.contact-section {
  text-align: center;
}

.contact-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.contact-link {
  color: var(--text-primary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: var(--bg-card);
  border: 2px solid var(--border-color);
  transition: all 0.2s;
}

.contact-link:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.contact-sep {
  color: var(--text-secondary);
}

/* 技能标签 */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.skill-category h3 {
  font-size: 1rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--bg-card);
  padding: 0.4rem 0.8rem;
  border: 2px solid var(--border-color);
  font-size: 0.9rem;
  color: var(--text-primary);
}

/* 项目展示 */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-card {
  background: var(--bg-card);
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.project-card:hover {
  border-color: var(--accent);
}

.project-name {
  font-size: 1rem;
  color: var(--accent);
  margin-bottom: 0.3rem;
}

.project-desc {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
}

.tech-tag {
  background: var(--bg-secondary);
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  border: 2px solid var(--pixel-green);
  color: var(--pixel-green);
}

</style>
