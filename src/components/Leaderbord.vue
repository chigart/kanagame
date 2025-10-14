<template>
  <div class="leaderboard">
    <h2>Leaderboard</h2>
    <div v-for="(item, i) in leaderboard.entries.slice(0, 5)" :key="i" class="entry">
      <span>{{ shortAddress(item.address) }}</span>
      <span>{{ item.score }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { leaderboard } from '../stores/leaderboard'

function shortAddress(a: string) {
  return a.slice(0, 6) + '...' + a.slice(-4)
}
</script>

<style lang="scss" scoped>
.leaderboard {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.entry {
  display: flex;
  justify-content: space-between;
  width: 200px;
}
</style>
