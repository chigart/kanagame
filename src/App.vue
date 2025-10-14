<script setup lang="ts">
import Game from './components/Game.vue'
import GameSettings from './components/GameSettings.vue'
</script>

<template>
  <div class="app">
    <GameSettings />
    <Game />
  </div>
</template>

<style lang="scss" scoped>
@use './styles/variables' as *;

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (max-width: $breakpoint-mobile) {
    padding: 1rem;
  }
}
</style>
