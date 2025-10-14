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
@use '../styles/variables' as *;

.leaderboard {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid $color-accent-secondary;
  border-radius: $radius;
  background: rgba(179, 0, 255, 0.05);
  
  h2 {
    color: $color-accent-primary;
    text-shadow: $glow-cyan;
    font-family: $font-main;
    font-weight: 600;
    margin: 0 0 1rem 0;
    text-align: center;
  }
}

.entry {
  display: flex;
  justify-content: space-between;
  width: 200px;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
  font-family: $font-main;
  color: $color-text;
  transition: all $transition;
  
  &:hover {
    background: rgba(0, 255, 255, 0.05);
    color: $color-accent-primary;
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  span:first-child {
    color: $color-accent-secondary;
    font-weight: 500;
  }
  
  span:last-child {
    color: $color-accent-primary;
    font-weight: 600;
    text-shadow: $glow-cyan;
  }
}
</style>
