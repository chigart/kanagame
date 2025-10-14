<template>
  <div class="library-view">
    <div class="kana-grid">
      <div v-for="group in groupedKana" :key="group.name" class="kana-group">
        <h3 class="group-title">{{ group.name }}</h3>
        <div class="kana-row">
          <div v-for="item in group.items" :key="item.kana" class="kana-item">
            <span class="kana-char">{{ item.kana }}</span>
            <span class="romaji">{{ item.romaji }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { gameSettings } from '../stores/gameSettings'

const groupedKana = computed(() => {
  const kanaList = gameSettings.currentKanaList
  const groups = [
    { name: 'Vowels', items: kanaList.slice(0, 5) },
    { name: 'K-row', items: kanaList.slice(5, 10) },
    { name: 'S-row', items: kanaList.slice(10, 15) },
    { name: 'T-row', items: kanaList.slice(15, 20) },
    { name: 'N-row', items: kanaList.slice(20, 25) },
    { name: 'H-row', items: kanaList.slice(25, 30) },
    { name: 'M-row', items: kanaList.slice(30, 35) },
    { name: 'Y-row', items: kanaList.slice(35, 38) },
    { name: 'R-row', items: kanaList.slice(38, 43) },
    { name: 'W-row', items: kanaList.slice(43, 46) },
    { name: 'G-row (Dakuon)', items: kanaList.slice(46, 51) },
    { name: 'Z-row (Dakuon)', items: kanaList.slice(51, 56) },
    { name: 'D-row (Dakuon)', items: kanaList.slice(56, 61) },
    { name: 'B-row (Dakuon)', items: kanaList.slice(61, 66) },
    { name: 'P-row (Handakuon)', items: kanaList.slice(66, 71) },
    { name: 'K-row (Youon)', items: kanaList.slice(71, 74) },
    { name: 'S-row (Youon)', items: kanaList.slice(74, 77) },
    { name: 'T-row (Youon)', items: kanaList.slice(77, 80) },
    { name: 'N-row (Youon)', items: kanaList.slice(80, 83) },
    { name: 'H-row (Youon)', items: kanaList.slice(83, 86) },
    { name: 'M-row (Youon)', items: kanaList.slice(86, 89) },
    { name: 'R-row (Youon)', items: kanaList.slice(89, 92) },
    { name: 'G-row (Youon Dakuon)', items: kanaList.slice(92, 95) },
    { name: 'Z-row (Youon Dakuon)', items: kanaList.slice(95, 98) },
    { name: 'B-row (Youon Dakuon)', items: kanaList.slice(98, 101) },
    { name: 'P-row (Youon Handakuon)', items: kanaList.slice(101, 104) },
  ]
  return groups.filter((group) => group.items.length > 0)
})
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.library-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.library-title {
  font-size: 2.5rem;
  color: $color-accent-primary;
  text-shadow: $glow-cyan;
  text-align: center;
  margin-bottom: 3rem;
  font-family: $font-main;
  font-weight: 600;
}

.kana-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(800px, 1fr));
  gap: 2rem;
}

.kana-group {
  background: $color-overlay-cyan-light;
  border: 1px solid $color-accent-secondary;
  border-radius: $radius;
  padding: 1.5rem;
  transition: all $transition;

  &:hover {
    box-shadow: $glow-purple;
    background: $color-overlay-cyan-medium;
  }
}

.group-title {
  font-size: 1.5rem;
  color: $color-accent-primary;
  margin-bottom: 1rem;
  font-family: $font-main;
  font-weight: 600;
  text-shadow: $text-shadow-cyan;
}

.kana-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.kana-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: $color-overlay-purple-light;
  border: 1px solid $color-accent-secondary;
  border-radius: $radius;
  transition: all $transition;

  &:hover {
    background: $color-overlay-purple-medium;
    box-shadow: $glow-purple;
  }
}

.kana-char {
  font-size: 2.5rem;
  color: $color-accent-primary;
  text-shadow: $glow-cyan;
  font-family: $font-main;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.romaji {
  font-size: 1.1rem;
  color: $color-text;
  font-family: $font-main;
  font-weight: 500;
  text-transform: lowercase;
}
</style>
