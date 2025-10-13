<script setup lang="ts">
import Game from './components/Game.vue'
import Leaderbord from './components/Leaderbord.vue'
import WalletConnectionButton from './components/WalletConnectButton.vue'
</script>

<template>
  <WalletConnectionButton />
  <Leaderbord />
  <Game />
</template>
