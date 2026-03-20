<template>
  <a href="#main-content" class="skip-link">跳转到主要内容</a>
  <NavBar />
  <main id="main-content">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--accent);
  color: var(--bg-primary);
  padding: 8px 16px;
  z-index: 1000;
  text-decoration: none;
}

.skip-link:focus {
  top: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
