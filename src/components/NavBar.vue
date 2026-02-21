<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="/assets/turtle.svg" alt="logo" class="logo-pixel">
        <span>老鳖的个人网站</span>
      </router-link>
      <ul class="nav-links">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/blog">博客</router-link></li>
        <li><router-link to="/projects">项目</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  background-color: var(--bg-secondary);
  border-bottom: 4px solid var(--accent);
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  color: var(--text-primary);
}

.logo-pixel {
  width: 32px;
  height: 32px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-secondary);
  transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--accent);
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}
</style>
