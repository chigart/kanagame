<template>
  <div class="input-phase">
    <div v-for="(item, i) in kanaList" :key="i" class="input-row">
      <span class="kana">{{ item.kana }}</span>
      <input type="text" v-model="answers[i]" placeholder="Type romaji" id="i" />
    </div>
    <button @click="finish">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ kanaList: { kana: string; romaji: string }[] }>()
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
  width: 150px;
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
}
</style>
