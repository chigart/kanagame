<template>
  <div class="input-phase">
    <div v-for="(item, i) in kanaList" :key="i" class="input-row">
      <span class="kana">{{ item.kana }}</span>
      <input
        type="text"
        v-model="answers[i]"
        :id="i.toString()"
        :readonly="showAnswers"
        :class="{
          correct: showAnswers && answers[i]?.toLowerCase() === item.romaji.toLowerCase(),
          incorrect:
            showAnswers &&
            answers[i]?.toLowerCase() !== item.romaji.toLowerCase() &&
            answers[i] !== '',
        }"
      />
      <span class="correct-answer">{{ showAnswers ? item.romaji : '' }}</span>
    </div>
  </div>
  <button v-if="!showAnswers" @click="finish">Submit</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  kanaList: { kana: string; romaji: string }[]
  showAnswers?: boolean
}>()
const emit = defineEmits(['finished'])

const answers = ref<string[]>(Array(props.kanaList.length).fill(''))

function finish() {
  const correct = props.kanaList.filter(
    (item, i) => item.romaji.toLowerCase() === answers.value[i]?.toLowerCase()
  )
  const score = (correct.length / props.kanaList.length) * 100
  emit('finished', score)
}
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.input-phase {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid $color-accent-secondary;
  border-radius: $radius;
  background: $color-overlay-purple-light;
  transition: all $transition;

  &:hover {
    box-shadow: $glow-purple;
    background: $color-overlay-purple-medium;
  }

  @media (max-width: $breakpoint-mobile) {
    padding: 0;
  }
}

.kana {
  min-width: 120px;
  font-size: 3rem;
  color: $color-accent-primary;
  text-shadow: $glow-cyan;
  font-family: $font-main;
  font-weight: 600;
  text-align: center;

  @media (max-width: $breakpoint-mobile) {
    font-size: 2rem;
    min-width: 80px;
  }
}

input {
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;
  border-radius: $radius;
  border: 1px solid $color-accent-primary;
  width: 74px;
  background: $color-bg;
  color: $color-text;
  font-family: $font-main;
  transition: all $transition;

  &:focus {
    outline: none;
    border-color: $color-accent-primary;
    box-shadow: $glow-cyan;
    background: $color-overlay-cyan-light;
  }

  &::placeholder {
    color: $placeholder-cyan;
  }

  &.correct {
    border-color: $border-success;
    background: $color-overlay-success-light;
    box-shadow: $glow-success;
  }

  &.incorrect {
    border-color: $border-error;
    background: $color-overlay-error-light;
    box-shadow: $glow-error;
  }

  &[readonly] {
    cursor: not-allowed;
    opacity: 0.8;
  }

  @media (max-width: $breakpoint-mobile) {
    font-size: 1rem;
    padding: 0.3rem 0.6rem;
    width: 65px;
  }
}

.correct-answer {
  min-width: 50px;
  color: $color-success;
  font-weight: 600;
  font-size: 1.1rem;
  text-shadow: $text-shadow-success;
  margin-left: 0.5rem;

  @media (max-width: $breakpoint-mobile) {
    font-size: 0.9rem;
    margin-left: 0.3rem;
  }
}
</style>
