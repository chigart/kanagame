<template>
  <button class="wallet-btn" :disabled="wallet.isSigning" @click="connect">
    <span v-if="wallet.isSigning">Signing...</span>
    <span v-else-if="wallet.address">{{ shortAddress(wallet.address) }}</span>
    <span v-else>Connect Wallet</span>
  </button>
</template>

<script setup lang="ts">
import { wallet } from '../stores/wallet'

function shortAddress(addr: string) {
  return addr.slice(0, 6) + '...' + addr.slice(-4)
}

async function connect() {
  if (!wallet.isSigning) {
    await wallet.connect()
  }
}
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.wallet-btn {
  position: relative;
  overflow: hidden;
  
  &:not(:disabled):not(:hover) {
    &[class*="connected"] {
      border-color: $color-accent-secondary;
      color: $color-accent-secondary;
      box-shadow: $glow-purple;
    }
  }
}
</style>
