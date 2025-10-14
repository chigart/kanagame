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
          correct: showAnswers && answers[i] === item.romaji,
          incorrect: showAnswers && answers[i] !== item.romaji && answers[i] !== '',
        }"
      />
      <span v-if="showAnswers" class="correct-answer">{{ item.romaji }}</span>
    </div>
    <button v-if="!showAnswers" @click="finish">Submit</button>
  </div>
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
  const correct = props.kanaList.filter((item, i) => item.romaji === answers.value[i])
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
  gap: 1rem;
  padding: 1rem;
  border: 1px solid $color-accent-secondary;
  border-radius: $radius;
  background: rgba(179, 0, 255, 0.05);
  transition: all $transition;

  &:hover {
    box-shadow: $glow-purple;
    background: rgba(179, 0, 255, 0.1);
  }
}

.kana {
  font-size: 3rem;
  color: $color-accent-primary;
  text-shadow: $glow-cyan;
  font-family: $font-main;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
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
    background: rgba(0, 255, 255, 0.05);
  }

  &::placeholder {
    color: rgba(0, 255, 255, 0.5);
  }

  &.correct {
    border-color: #00ff00;
    background: rgba(0, 255, 0, 0.1);
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
  }

  &.incorrect {
    border-color: #ff0000;
    background: rgba(255, 0, 0, 0.1);
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
  }

  &[readonly] {
    cursor: not-allowed;
    opacity: 0.8;
  }
}

.correct-answer {
  color: #00ff00;
  font-weight: 600;
  font-size: 1.1rem;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
  margin-left: 0.5rem;
}
</style>
