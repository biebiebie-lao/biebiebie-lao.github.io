<template>
  <div class="about-container">
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
          <a :href="githubUrl" target="_blank">GitHub</a>
        </div>
      </div>
    </aside>

    <div class="about-content">
      <h2>关于我</h2>
      <p>
        大家好，我是老鳖！一名热爱技术的大学生，目前专注于嵌入式开发和人工智能领域的学习与实践。
      </p>
      <p>
        我喜欢折腾各种硬件设备，从 STM32 到 ESP32，从传感器到物联网网关。同时也对机器学习、强化学习等 AI 技术充满兴趣，正在不断学习和探索中。
      </p>
      <p>
        这个网站用来记录我的学习笔记和项目分享，希望能够帮助到有需要的朋友，也欢迎大家交流讨论！
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getSiteName, getEmail, getWechat, getGithubUrl, getAvatar } from '../services/configService'

const avatarRef = ref(null)
const showAvatar = ref(false)
const avatarSrc = ref(getAvatar())
const siteName = getSiteName()
const email = getEmail()
const wechat = getWechat()
const githubUrl = getGithubUrl()

onMounted(async () => {
  try {
    const res = await fetch(avatarSrc.value)
    if (res.ok) {
      showAvatar.value = true
    }
  } catch (e) {
    showAvatar.value = false
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
