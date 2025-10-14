<template>
  <div class="kana-display">
    <motion.span
      v-for="(item, i) in kanaList"
      :key="i"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ delay: i * 0.4, duration: 0.6 }"
    >
      {{ item.kana }}
    </motion.span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { motion } from 'motion-v'

defineProps<{ kanaList: { kana: string; romaji: string }[] }>()
const emit = defineEmits(['done'])

let timeoutId: number

onMounted(() => (timeoutId = setTimeout(() => emit('done'), 3000)))

onUnmounted(() => {
  clearTimeout(timeoutId)
})
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.kana-display {
  display: flex;
  gap: 1.5rem;
  font-size: 4rem;
  justify-content: center;
  align-items: center;
  
  span {
    color: $color-accent-primary;
    text-shadow: $glow-cyan;
    font-family: $font-main;
    font-weight: 600;
    animation: pulse 2s ease-in-out infinite alternate;
  }
}

@keyframes pulse {
  0% {
    text-shadow: $glow-cyan;
  }
  100% {
    text-shadow: $glow-strong;
  }
}
</style>
