<template>
  <div class="score-screen">
    <h2>Your Score: {{ score }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{ score: number }>()
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.score-screen {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.5rem;

  h2 {
    color: $color-accent-primary;
    text-shadow: $glow-cyan;
    font-family: $font-main;
    font-weight: 600;
    font-size: 2.5rem;
    margin: 0;
    animation: scoreGlow 2s ease-in-out infinite alternate;
  }
}

@keyframes scoreGlow {
  0% {
    text-shadow: $glow-cyan;
  }
  100% {
    text-shadow: $glow-strong;
  }
}
</style>
