<template>
  <div class="input-phase">
    <div v-for="(item, i) in kanaList" :key="i" class="input-row">
      <span class="kana">{{ item.kana }}</span>
      <input type="text" v-model="answers[i]" placeholder="Type romaji" />
    </div>
    <button class="btn" @click="finish">Submit</button>
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
.input-phase {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.kana {
  font-size: 3rem;
}

input {
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 150px;
}
</style>
