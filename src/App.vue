<script setup lang="ts">
import { motion } from 'motion-v'
import Game from './components/Game.vue'
</script>

<template>
  <motion.h1
    :initial="{ opacity: 0, y: 30 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 1 }"
  >
    Proof of Kana
  </motion.h1>
  <Game />
</template>
