<template>
  <div class="hero">
    <div class="turtle-container">
      <img src="/assets/turtle.svg" alt="logo" class="turtle-pixel">
    </div>
    <h1>欢迎来到老鳖的个人网站</h1>
    <p>专注于嵌入式开发与人工智能的技术博客</p>
    <div class="quick-links">
      <router-link to="/blog" class="btn">浏览博客</router-link>
      <router-link to="/projects" class="btn">查看项目</router-link>
      <router-link to="/about" class="btn">关于我</router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 2rem;
}

.turtle-container {
  margin: 2rem auto;
  width: 120px;
  height: 120px;
  position: relative;
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

.hero h1 {
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
}

.quick-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: var(--accent);
  color: var(--bg-primary);
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  border: 4px solid var(--text-primary);
  box-shadow: 4px 4px 0 var(--shadow);
  transition: all 0.2s;
}

.btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--shadow);
}
</style>
