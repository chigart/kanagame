import { reactive } from 'vue'
import { kanaList as hiraganaList } from '../data/hiragana'
import { kanaList as katakanaList } from '../data/katakana'

export type KanaType = 'hiragana' | 'katakana'
export type GameMode = 'standard' | 'simplified' | 'library'

export const gameSettings = reactive({
  kanaType: 'hiragana' as KanaType,
  gameMode: 'standard' as GameMode,

  get currentKanaList() {
    return this.kanaType === 'hiragana' ? hiraganaList : katakanaList
  },

  setKanaType(type: KanaType) {
    this.kanaType = type
  },

  setGameMode(mode: GameMode) {
    this.gameMode = mode
  },
})
