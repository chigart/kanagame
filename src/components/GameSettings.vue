<template>
  <div class="game-settings">
    <div class="settings-section">
      <h3 class="section-title">Kana Type</h3>
      <div class="button-group">
        <button
          :class="['button', { active: gameSettings.kanaType === 'hiragana' }]"
          @click="gameSettings.setKanaType('hiragana')"
        >
          Hiragana
        </button>
        <button
          :class="['button', { active: gameSettings.kanaType === 'katakana' }]"
          @click="gameSettings.setKanaType('katakana')"
        >
          Katakana
        </button>
      </div>
    </div>

    <div class="settings-section">
      <h3 class="section-title">Game Mode</h3>
      <div class="button-group">
        <button
          :class="['button', { active: gameSettings.gameMode === 'standard' }]"
          @click="gameSettings.setGameMode('standard')"
        >
          Standard
        </button>
        <button
          :class="['button', { active: gameSettings.gameMode === 'simplified' }]"
          @click="gameSettings.setGameMode('simplified')"
        >
          Simplified
        </button>
        <button
          :class="['button', { active: gameSettings.gameMode === 'library' }]"
          @click="gameSettings.setGameMode('library')"
        >
          Library
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gameSettings } from '../stores/gameSettings'
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.game-settings {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: $color-overlay-dark;
  border: 1px solid $color-accent-secondary;
  border-radius: $radius;
  backdrop-filter: blur(10px);

  @media (max-width: $breakpoint-mobile) {
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;
  }
}

.settings-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: $breakpoint-mobile) {
    gap: 0.5rem;
  }
}

.section-title {
  font-size: 1.2rem;
  color: $color-accent-primary;
  text-shadow: $glow-cyan;
  font-family: $font-main;
  font-weight: 600;
  margin: 0;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.button {
  min-width: 144px;
  border: 1px solid $color-accent-secondary;
  background: $color-overlay-cyan-light;
  color: $color-text;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;

  &:hover {
    background: $color-overlay-cyan-medium;
    box-shadow: $glow-cyan;
    border-color: $color-accent-primary;
  }

  &.active {
    background: $color-overlay-cyan-strong;
    border-color: $color-accent-primary;
    color: $color-accent-primary;
    text-shadow: $glow-cyan;
    box-shadow: $glow-cyan;
  }

  @media (max-width: $breakpoint-mobile) {
    font-size: 0.9rem;
    min-width: 120px;
  }
}
</style>
