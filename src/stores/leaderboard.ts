import { reactive, ref, computed } from 'vue'

interface Entry {
  address: string
  score: number
  signature: string
  time: string
}

const STORAGE_KEY = 'leaderboard'

// Create a reactive trigger that we can update
const trigger = ref(0)

export const leaderboard = reactive({
  entries: computed(() => {
    // Access trigger to make this computed reactive to it
    trigger.value
    const data = localStorage.getItem(STORAGE_KEY)
    const entries = JSON.parse(data || '[]') as Entry[]
    return entries.sort((a, b) => b.score - a.score)
  }),

  addScore(entry: Entry) {
    const scores = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    scores.push(entry)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores))
    // Trigger reactivity by updating the trigger
    trigger.value++
  },
})
