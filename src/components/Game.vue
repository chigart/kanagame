<template>
  <div class="game-container">
    <WalletConnectionButton />
    <Leaderbord v-if="phase === 'idle' || phase === 'score'" />
    <KanaDisplay v-if="phase === 'memorize'" :kanaList="currentKana" @done="toInput" />
    <InputPhase v-if="phase === 'input'" :kanaList="currentKana" @finished="onScore" />
    <ScoreScreen v-if="phase === 'score'" :score="score" @restart="startGame" />
    <button v-if="phase === 'idle' && wallet.address !== null" @click="startGame">
      Start Game
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { kanaList } from '../data/hiragana'
import KanaDisplay from './KanaDisplay.vue'
import InputPhase from './InputPhase.vue'
import ScoreScreen from './ScoreScreen.vue'
import { wallet } from '../stores/wallet'
import { leaderboard } from '../stores/leaderboard'
import Leaderbord from './Leaderbord.vue'
import WalletConnectionButton from './WalletConnectButton.vue'

const phase = ref<'idle' | 'memorize' | 'input' | 'score'>('idle')
const currentKana = ref<{ kana: string; romaji: string }[]>([])
const score = ref(0)

function shuffle<T>(array: T[]) {
  return array.sort(() => Math.random() - 0.5)
}

function startGame() {
  currentKana.value = shuffle(kanaList).slice(0, 5)
  phase.value = 'memorize'
}

function toInput() {
  phase.value = 'input'
}

async function onScore(result: number) {
  score.value = result

  if (!wallet.address) {
    alert('Connect wallet to verify your skill')
    return
  }

  try {
    const message = `Proof of Kana – Score ${score.value}%`
    const signature = await wallet.signMessage(message)

    leaderboard.addScore({
      address: wallet.address,
      score: score.value,
      signature,
      time: new Date().toISOString(),
    })

    phase.value = 'score'
  } catch (error) {
    console.error('Failed to sign message:', error)

    if (error instanceof Error) {
      if (error.message.includes('timed out')) {
        alert('Signature request timed out. Please try again.')
      } else if (error.message.includes('disconnected')) {
        alert('Wallet disconnected. Please reconnect and try again.')
        wallet.disconnect()
      } else if (error.message.includes('already in progress')) {
        alert('Signature already in progress. Please wait.')
      } else {
        alert('Failed to sign message. Please try again.')
      }
    } else {
      alert('An unexpected error occurred. Please try again.')
    }

    // Still show the score screen even if signature fails
    phase.value = 'score'
  }
}
</script>

<style lang="scss" scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem;
}
</style>
