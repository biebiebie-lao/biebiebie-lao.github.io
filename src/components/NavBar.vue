<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="/assets/turtle.svg" alt="老鳖的个人网站" class="logo-pixel" aria-hidden="true">
        <span>老鳖的个人网站</span>
      </router-link>
      <button class="hamburger" @click="isMenuOpen = !isMenuOpen" :aria-expanded="isMenuOpen" aria-controls="nav-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul id="nav-menu" class="nav-links" :class="{ open: isMenuOpen }">
        <li><router-link to="/" @click="isMenuOpen = false">首页</router-link></li>
        <li><router-link to="/blog" @click="isMenuOpen = false">博客</router-link></li>
        <li><router-link to="/projects" @click="isMenuOpen = false">项目</router-link></li>
        <li><router-link to="/about" @click="isMenuOpen = false">关于</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
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

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background: var(--text-primary);
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
  .hamburger {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-secondary);
    padding: 1rem;
    border-bottom: 4px solid var(--accent);
  }

  .nav-links.open {
    display: flex;
  }
}
</style>
