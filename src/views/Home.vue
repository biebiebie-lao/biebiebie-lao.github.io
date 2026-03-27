<template>
  <div class="page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="avatar-container">
          <img src="/assets/me.jpg" alt="老鳖" class="avatar" />
          <div class="avatar-ring"></div>
        </div>
        <h1 class="name">老鳖</h1>
        <p class="tagline">
          <span class="typewriter">一名热爱嵌入式开发和人工智能的学生</span>
        </p>
        <div class="hero-divider"></div>
      </div>
      <div class="scroll-indicator">
        <span>向下滚动</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="section education">
      <div class="section-header">
        <span class="section-number">01</span>
        <h2 class="section-title">教育背景</h2>
      </div>
      <div class="education-card">
        <div class="card-accent"></div>
        <h3 class="school">北京体育大学</h3>
        <p class="major">智能体育工程 · 本科 · 2023级</p>
        <div class="card-decoration">
          <svg viewBox="0 0 100 100" class="card-pattern">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="0.5"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="0.5"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="0.5"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section skills">
      <div class="section-header">
        <span class="section-number">02</span>
        <h2 class="section-title">技能</h2>
      </div>
      <div class="skills-grid">
        <div class="skill-card" v-for="(skill, index) in skills" :key="skill.category" :style="{ animationDelay: `${index * 100}ms` }">
          <h3 class="skill-category">{{ skill.category }}</h3>
          <div class="skill-tags">
            <span class="tag" v-for="item in skill.items" :key="item">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Section -->
    <section class="section project">
      <div class="section-header">
        <span class="section-number">03</span>
        <h2 class="section-title">项目</h2>
      </div>
      <div class="project-card">
        <div class="project-header">
          <h3 class="project-name">反应训练灯</h3>
          <a href="https://gitee.com/lao_bie/now-reaction" target="_blank" class="project-link">
            <span>查看项目</span>
            <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
        <p class="project-desc">基于 ESP32-C6 的分布式反应时间测量系统，配合移动 App 实现反应速度训练</p>
        <div class="project-tech">
          <span class="tech-tag" v-for="tech in projectTech" :key="tech">{{ tech }}</span>
        </div>
        <div class="project-visual">
          <div class="visual-dot"></div>
          <div class="visual-dot"></div>
          <div class="visual-dot"></div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact">
      <div class="section-header">
        <span class="section-number">04</span>
        <h2 class="section-title">联系方式</h2>
      </div>
      <div class="contact-links">
        <a href="https://github.com/lao-biebiebie" target="_blank" class="contact-item">
          <span>GitHub</span>
          <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </a>
        <a href="mailto:2023012418@bsu.edu.cn" class="contact-item">
          <span>邮箱</span>
          <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
        <div class="contact-item wechat">
          <span>微信</span>
          <span class="wechat-id">_13939216622c</span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-line"></div>
      <p class="footer-text">© 2026 老鳖</p>
    </footer>
  </div>
</template>

<script setup>
const skills = [
  { category: '编程语言', items: ['C/C++', 'Python'] },
  { category: '嵌入式', items: ['STM32', 'ESP32', 'RDK X5'] },
  { category: 'AI / 机器学习', items: ['LLM', 'RL'] },
  { category: '工具', items: ['Git', 'Linux', 'Docker'] }
]

const projectTech = ['ESP32-C6', 'ESP-NOW', 'BLE', 'Quasar']
</script>

<style scoped>
.page {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

/* ===== Hero Section ===== */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: var(--spacing-4xl) 0;
}

.hero-content {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.avatar-container {
  position: relative;
  width: 140px;
  height: 140px;
  margin: 0 auto var(--spacing-xl);
}

.avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.avatar-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  animation: pulse 3s ease-in-out infinite;
}

.name {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: -0.03em;
  margin-bottom: var(--spacing-md);
}

.tagline {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  overflow: hidden;
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 2s steps(20) forwards;
  animation-delay: 0.5s;
  width: 0;
  animation-fill-mode: forwards;
}

.hero-divider {
  width: 60px;
  height: 1px;
  background: var(--accent);
  margin: 0 auto;
}

.scroll-indicator {
  position: absolute;
  bottom: var(--spacing-2xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-muted);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: fadeIn 1s ease forwards;
  animation-delay: 1.5s;
  opacity: 0;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--text-muted), transparent);
  animation: float 2s ease-in-out infinite;
}

/* ===== Section Styles ===== */
.section {
  padding: var(--spacing-4xl) 0;
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.3s;
}

.section:nth-child(2) { animation-delay: 0.4s; }
.section:nth-child(3) { animation-delay: 0.5s; }
.section:nth-child(4) { animation-delay: 0.6s; }
.section:nth-child(5) { animation-delay: 0.7s; }

.section-header {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.section-number {
  font-family: var(--font-serif);
  font-size: 0.875rem;
  color: var(--accent);
  font-weight: 400;
}

.section-title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

/* ===== Education ===== */
.education-card {
  position: relative;
  padding: var(--spacing-xl);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.card-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--accent);
}

.school {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.major {
  color: var(--text-secondary);
  font-size: 1rem;
}

.card-decoration {
  position: absolute;
  right: var(--spacing-xl);
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  height: 80px;
  color: var(--border-color);
  opacity: 0.5;
}

/* ===== Skills ===== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

.skill-card {
  padding: var(--spacing-lg);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  opacity: 0;
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.skill-category {
  font-size: 0.875rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--spacing-md);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tag {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 0.9375rem;
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);
}

.tag:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ===== Project ===== */
.project-card {
  padding: var(--spacing-xl);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
}

.project-name {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-primary);
}

.project-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--accent);
  font-size: 0.875rem;
}

.arrow {
  width: 16px;
  height: 16px;
  transition: transform var(--transition-fast);
}

.project-link:hover .arrow {
  transform: translate(2px, -2px);
}

.project-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tech-tag {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--bg-primary);
  color: var(--accent);
  font-size: 0.75rem;
  border-radius: 2px;
}

.project-visual {
  position: absolute;
  right: var(--spacing-xl);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: var(--spacing-sm);
}

.visual-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s ease-in-out infinite;
}

.visual-dot:nth-child(2) { animation-delay: 0.3s; }
.visual-dot:nth-child(3) { animation-delay: 0.6s; }

/* ===== Contact ===== */
.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 0.9375rem;
  transition: all var(--transition-fast);
}

.contact-item:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.external-icon {
  width: 14px;
  height: 14px;
  opacity: 0.5;
}

.wechat {
  cursor: default;
}

.wechat-id {
  color: var(--text-muted);
  font-size: 0.8125rem;
}

.contact-item.wechat:hover {
  color: var(--text-primary);
  border-color: var(--border-color);
}

/* ===== Footer ===== */
.footer {
  padding: var(--spacing-4xl) 0 var(--spacing-2xl);
  text-align: center;
}

.footer-line {
  width: 40px;
  height: 1px;
  background: var(--border-color);
  margin: 0 auto var(--spacing-lg);
}

.footer-text {
  color: var(--text-muted);
  font-size: 0.8125rem;
}

/* ===== Responsive ===== */
@media (max-width: 600px) {
  .hero {
    min-height: auto;
    padding: var(--spacing-3xl) 0;
  }

  .avatar-container {
    width: 100px;
    height: 100px;
  }

  .avatar {
    width: 100px;
    height: 100px;
  }

  .project-visual,
  .card-decoration {
    display: none;
  }

  .project-header {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
