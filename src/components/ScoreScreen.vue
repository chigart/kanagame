<template>
  <div class="score-screen">
    <h2>Your Score: {{ score }}</h2>
    <button class="btn" @click="$emit('restart')">Play Again</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ score: number }>()
</script>

<style lang="scss" scoped>
.score-screen {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.5rem;
}
</style>
