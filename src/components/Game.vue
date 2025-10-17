<template>
  <div class="game-container">
    <LibraryView v-if="gameSettings.gameMode === 'library'" />
    <template v-else>
      <WalletConnectionButton v-if="gameSettings.gameMode === 'standard'" />
      <KanaDisplay
        v-if="gameSettings.gameMode === 'standard' && phase === 'memorize'"
        :kanaList="currentKana"
        @done="toInput"
      />

      <InputPhase
        v-if="phase === 'input' || phase === 'feedback'"
        :kanaList="currentKana"
        :showAnswers="phase === 'feedback'"
        @finished="onScore"
      />

      <Leaderbord
        v-if="gameSettings.gameMode === 'standard' && (phase === 'idle' || phase === 'score')"
      />
      <ScoreScreen
        v-if="gameSettings.gameMode === 'standard' && phase === 'score'"
        :score="score"
        @restart="startGame"
      />

      <button v-if="phase === 'feedback'" @click="openScore">Next</button>
      <button
        v-if="
          phase === 'idle' ||
          (phase === 'score' && (gameSettings.gameMode === 'simplified' || wallet.address !== null))
        "
        @click="startGame"
      >
        Start Game
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { gameSettings } from '../stores/gameSettings'
import KanaDisplay from './KanaDisplay.vue'
import InputPhase from './InputPhase.vue'
import ScoreScreen from './ScoreScreen.vue'
import LibraryView from './LibraryView.vue'
import { wallet } from '../stores/wallet'
import { leaderboard } from '../stores/leaderboard'
import Leaderbord from './Leaderbord.vue'
import WalletConnectionButton from './WalletConnectButton.vue'

const phase = ref<'idle' | 'memorize' | 'input' | 'feedback' | 'score'>('idle')
const currentKana = ref<{ kana: string; romaji: string }[]>([])
const score = ref(0)

function shuffle<T>(array: T[]) {
  return array.sort(() => Math.random() - 0.5)
}

function startGame() {
  currentKana.value = shuffle(gameSettings.currentKanaList).slice(0, 5)
  phase.value = gameSettings.gameMode === 'simplified' ? 'input' : 'memorize'
}

function openScore() {
  if (gameSettings.gameMode === 'simplified') {
    startGame()
    return
  }
  phase.value = 'score'
}

function toInput() {
  phase.value = 'input'
}

async function onScore(result: number) {
  score.value = result

  if (gameSettings.gameMode === 'simplified') {
    phase.value = 'feedback'
    return
  }

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

    phase.value = 'feedback'
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
  padding: 1rem;
  gap: 1rem;
}
</style>
