<template>
  <div class="resume">
    <!-- Header Section -->
    <header class="header">
      <div class="avatar-wrapper">
        <img src="/assets/me.jpg" alt="头像" class="avatar" />
      </div>
      <h1 class="name">老鳖</h1>
      <p class="tagline">一名热爱嵌入式开发和人工智能的学生</p>
    </header>

    <!-- Education Section -->
    <section class="section">
      <h2 class="section-title">教育背景</h2>
      <div class="education-card">
        <h3 class="school">北京体育大学</h3>
        <p class="major">智能体育工程 · 本科 · 2023级</p>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section">
      <h2 class="section-title">技能</h2>
      <div class="skills-grid">
        <div class="skill-group">
          <h3 class="skill-category">编程语言</h3>
          <div class="skill-tags">
            <span class="tag">C/C++</span>
            <span class="tag">Python</span>
          </div>
        </div>
        <div class="skill-group">
          <h3 class="skill-category">嵌入式</h3>
          <div class="skill-tags">
            <span class="tag">STM32</span>
            <span class="tag">ESP32</span>
            <span class="tag">RDK X5</span>
          </div>
        </div>
        <div class="skill-group">
          <h3 class="skill-category">AI / 机器学习</h3>
          <div class="skill-tags">
            <span class="tag">LLM</span>
            <span class="tag">RL</span>
          </div>
        </div>
        <div class="skill-group">
          <h3 class="skill-category">工具</h3>
          <div class="skill-tags">
            <span class="tag">Git</span>
            <span class="tag">Linux</span>
            <span class="tag">Docker</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section">
      <h2 class="section-title">项目</h2>
      <div class="projects-list">
        <div class="project-card">
          <h3 class="project-name">反应训练灯</h3>
          <p class="project-desc">基于 ESP32-C6 的分布式反应时间测量系统，配合移动 App 实现反应速度训练</p>
          <div class="project-tech">
            <span class="tech-tag">ESP32-C6</span>
            <span class="tech-tag">ESP-NOW</span>
            <span class="tech-tag">BLE</span>
            <span class="tech-tag">Quasar</span>
          </div>
          <a href="https://gitee.com/lao_bie/now-reaction" target="_blank" class="project-link">查看项目 →</a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section">
      <h2 class="section-title">联系方式</h2>
      <div class="contact-list">
        <a href="https://github.com/lao-biebiebie" target="_blank" class="contact-item">GitHub</a>
        <a href="mailto:2023012418@bsu.edu.cn" class="contact-item">邮箱</a>
        <span class="contact-item">微信: _13939216622c</span>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional logic needed - static resume page
</script>

<style scoped>
.resume {
  max-width: 680px;
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-lg);
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header */
.header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.avatar-wrapper {
  margin-bottom: var(--spacing-lg);
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-color);
}

.name {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.02em;
}

.tagline {
  font-size: 1.125rem;
  color: var(--text-secondary);
}

/* Sections */
.section {
  margin-bottom: var(--spacing-2xl);
}

.section-title {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--border-subtle);
}

/* Education */
.education-card {
  padding: var(--spacing-md) 0;
}

.school {
  font-size: 1.125rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.major {
  color: var(--text-secondary);
  font-size: 0.9375rem;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

.skill-group {
  padding: var(--spacing-md) 0;
}

.skill-category {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tag {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--bg-card);
  color: var(--text-primary);
  font-size: 0.875rem;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}

/* Projects */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.project-card {
  padding: var(--spacing-lg);
  background: var(--bg-card);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: border-color var(--transition-fast);
}

.project-card:hover {
  border-color: var(--border-subtle);
}

.project-name {
  font-size: 1.125rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.project-desc {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.tech-tag {
  padding: 2px 8px;
  background: var(--bg-hover);
  color: var(--accent);
  font-size: 0.75rem;
  border-radius: 3px;
}

.project-link {
  font-size: 0.875rem;
}

/* Contact */
.contact-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.contact-item {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  transition: color var(--transition-fast);
}

.contact-item:hover {
  color: var(--accent);
}
</style>
