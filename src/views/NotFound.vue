<template>
  <div class="not-found">
    <div class="content pixel-border">
      <h1 class="title">404</h1>
      <h2 class="subtitle">页面未找到</h2>
      <p class="message">抱歉，您访问的页面不存在或已被移动</p>
      <router-link to="/" class="home-link">返回首页</router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;
}

.content {
  background: var(--bg-card);
  padding: 3rem 4rem;
  text-align: center;
}

.title {
  font-size: 5rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.subtitle {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.message {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1rem;
}

.home-link {
  display: inline-block;
  background: var(--bg-secondary);
  color: var(--accent);
  padding: 0.8rem 2rem;
  border: 3px solid var(--accent);
  font-size: 1rem;
  transition: all 0.2s;
}

.home-link:hover {
  background: var(--accent);
  color: var(--bg-primary);
}
</style>
