<template>
  <div class="about-container">
    <div v-if="loading" class="loading">加载中...</div>
    <template v-else>
    <aside class="profile-section">
      <div class="profile-image" ref="avatarRef">
        <img v-if="showAvatar" :src="avatarSrc" alt="头像" @error="handleAvatarError">
        <span v-else class="avatar-placeholder">👤</span>
      </div>
      <h1>{{ siteName }}</h1>
      <p class="subtitle">嵌入式 & AI 开发者</p>

      <div class="contact-info">
        <h3>联系方式</h3>
        <div class="contact-item">
          <span class="icon">📧</span>
          <span>{{ email }}</span>
        </div>
        <div class="contact-item">
          <span class="icon">💬</span>
          <span>微信号：{{ wechat }}</span>
        </div>
        <div class="contact-item">
          <span class="icon">🐙</span>
          <a :href="githubUrl" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </aside>

    <div class="about-content">
      <h2>关于我</h2>
      <p>
        学习过 STM32，现在主要做 ESP32。折腾嵌入式项目，同时对 AI 技术感兴趣，了解一点 LLM 的理论，学过一点强化学习。
      </p>

      <h2>技术方向</h2>
      <div class="skills-list">
        <span class="skill-tag">嵌入式开发</span>
        <span class="skill-tag">ESP32</span>
        <span class="skill-tag">STM32</span>
        <span class="skill-tag">C/C++</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">机器学习</span>
        <span class="skill-tag">强化学习</span>
        <span class="skill-tag">物联网</span>
      </div>

      <h2>学习经历</h2>
      <p>
        开始学习嵌入式和 AI 技术已经有一段时间了，期间完成了多个小项目，也踩了不少坑。未来会继续深耕这两个领域，努力做出更有价值的项目。
      </p>
    </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useConfig } from '../services/configService'

const { avatar, name: siteName, email, wechat, github } = useConfig()

const avatarRef = ref(null)
const showAvatar = ref(false)
const avatarSrc = ref(avatar)
const githubUrl = ref(github)
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch(avatarSrc.value)
    if (res.ok) {
      showAvatar.value = true
    }
  } catch (e) {
    showAvatar.value = false
  } finally {
    loading.value = false
  }
})

const handleAvatarError = () => {
  showAvatar.value = false
}
</script>

<style scoped>
.about-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
}

.loading {
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
}

.profile-section {
  text-align: center;
}

.profile-image {
  width: 150px;
  height: 150px;
  margin: 0 auto 1rem;
  border: 4px solid var(--border-color);
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  font-size: 4rem;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  font-size: 4rem;
}

.profile-section h1 {
  margin: 0;
  color: var(--text-primary);
}

.subtitle {
  color: var(--accent);
  margin: 0.5rem 0 1.5rem;
}

.contact-info {
  text-align: left;
  background: var(--bg-card);
  padding: 1.5rem;
  border: 4px solid var(--border-color);
}

.contact-info h3 {
  margin: 0 0 1rem;
  color: var(--text-primary);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  color: var(--text-secondary);
}

.contact-item .icon {
  font-size: 1.2rem;
}

.contact-item a {
  color: var(--accent);
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

.about-content h2 {
  color: var(--text-primary);
  margin: 2rem 0 1rem;
}

.about-content h2:first-child {
  margin-top: 0;
}

.about-content p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.skill-tag {
  background: var(--bg-card);
  border: 2px solid var(--accent);
  color: var(--accent);
  padding: 0.3rem 0.8rem;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
  }
}
</style>
