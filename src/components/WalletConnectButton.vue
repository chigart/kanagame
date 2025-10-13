<template>
  <button class="btn" @click="connect">
    {{ wallet.address ? shortAddress(wallet.address) : 'Connect Wallet' }}
  </button>
</template>

<script setup lang="ts">
import { wallet } from '../stores/wallet'

function shortAddress(addr: string) {
  return addr.slice(0, 6) + '...' + addr.slice(-4)
}

async function connect() {
  await wallet.connect()
}
</script>

<style scoped>
.btn {
  background: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
}
</style>
