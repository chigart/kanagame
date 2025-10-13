export const kanaList = [
  // Basic vowels
  { kana: 'あ', romaji: 'a' },
  { kana: 'い', romaji: 'i' },
  { kana: 'う', romaji: 'u' },
  { kana: 'え', romaji: 'e' },
  { kana: 'お', romaji: 'o' },

  // K-row
  { kana: 'か', romaji: 'ka' },
  { kana: 'き', romaji: 'ki' },
  { kana: 'く', romaji: 'ku' },
  { kana: 'け', romaji: 'ke' },
  { kana: 'こ', romaji: 'ko' },

  // S-row
  { kana: 'さ', romaji: 'sa' },
  { kana: 'し', romaji: 'shi' },
  { kana: 'す', romaji: 'su' },
  { kana: 'せ', romaji: 'se' },
  { kana: 'そ', romaji: 'so' },

  // T-row
  { kana: 'た', romaji: 'ta' },
  { kana: 'ち', romaji: 'chi' },
  { kana: 'つ', romaji: 'tsu' },
  { kana: 'て', romaji: 'te' },
  { kana: 'と', romaji: 'to' },

  // N-row
  { kana: 'な', romaji: 'na' },
  { kana: 'に', romaji: 'ni' },
  { kana: 'ぬ', romaji: 'nu' },
  { kana: 'ね', romaji: 'ne' },
  { kana: 'の', romaji: 'no' },

  // H-row
  { kana: 'は', romaji: 'ha' },
  { kana: 'ひ', romaji: 'hi' },
  { kana: 'ふ', romaji: 'fu' },
  { kana: 'へ', romaji: 'he' },
  { kana: 'ほ', romaji: 'ho' },

  // M-row
  { kana: 'ま', romaji: 'ma' },
  { kana: 'み', romaji: 'mi' },
  { kana: 'む', romaji: 'mu' },
  { kana: 'め', romaji: 'me' },
  { kana: 'も', romaji: 'mo' },

  // Y-row
  { kana: 'や', romaji: 'ya' },
  { kana: 'ゆ', romaji: 'yu' },
  { kana: 'よ', romaji: 'yo' },

  // R-row
  { kana: 'ら', romaji: 'ra' },
  { kana: 'り', romaji: 'ri' },
  { kana: 'る', romaji: 'ru' },
  { kana: 'れ', romaji: 're' },
  { kana: 'ろ', romaji: 'ro' },

  // W-row
  { kana: 'わ', romaji: 'wa' },
  { kana: 'を', romaji: 'wo' },
  { kana: 'ん', romaji: 'n' },

  // Dakuon (voiced sounds) - G-row
  { kana: 'が', romaji: 'ga' },
  { kana: 'ぎ', romaji: 'gi' },
  { kana: 'ぐ', romaji: 'gu' },
  { kana: 'げ', romaji: 'ge' },
  { kana: 'ご', romaji: 'go' },

  // Dakuon - Z-row
  { kana: 'ざ', romaji: 'za' },
  { kana: 'じ', romaji: 'ji' },
  { kana: 'ず', romaji: 'zu' },
  { kana: 'ぜ', romaji: 'ze' },
  { kana: 'ぞ', romaji: 'zo' },

  // Dakuon - D-row
  { kana: 'だ', romaji: 'da' },
  { kana: 'ぢ', romaji: 'ji' },
  { kana: 'づ', romaji: 'zu' },
  { kana: 'で', romaji: 'de' },
  { kana: 'ど', romaji: 'do' },

  // Dakuon - B-row
  { kana: 'ば', romaji: 'ba' },
  { kana: 'び', romaji: 'bi' },
  { kana: 'ぶ', romaji: 'bu' },
  { kana: 'べ', romaji: 'be' },
  { kana: 'ぼ', romaji: 'bo' },

  // Handakuon (half-voiced sounds) - P-row
  { kana: 'ぱ', romaji: 'pa' },
  { kana: 'ぴ', romaji: 'pi' },
  { kana: 'ぷ', romaji: 'pu' },
  { kana: 'ぺ', romaji: 'pe' },
  { kana: 'ぽ', romaji: 'po' },

  // Youon (contracted sounds) - K-row
  { kana: 'きゃ', romaji: 'kya' },
  { kana: 'きゅ', romaji: 'kyu' },
  { kana: 'きょ', romaji: 'kyo' },

  // Youon - S-row
  { kana: 'しゃ', romaji: 'sha' },
  { kana: 'しゅ', romaji: 'shu' },
  { kana: 'しょ', romaji: 'sho' },

  // Youon - T-row
  { kana: 'ちゃ', romaji: 'cha' },
  { kana: 'ちゅ', romaji: 'chu' },
  { kana: 'ちょ', romaji: 'cho' },

  // Youon - N-row
  { kana: 'にゃ', romaji: 'nya' },
  { kana: 'にゅ', romaji: 'nyu' },
  { kana: 'にょ', romaji: 'nyo' },

  // Youon - H-row
  { kana: 'ひゃ', romaji: 'hya' },
  { kana: 'ひゅ', romaji: 'hyu' },
  { kana: 'ひょ', romaji: 'hyo' },

  // Youon - M-row
  { kana: 'みゃ', romaji: 'mya' },
  { kana: 'みゅ', romaji: 'myu' },
  { kana: 'みょ', romaji: 'myo' },

  // Youon - R-row
  { kana: 'りゃ', romaji: 'rya' },
  { kana: 'りゅ', romaji: 'ryu' },
  { kana: 'りょ', romaji: 'ryo' },

  // Youon Dakuon - G-row
  { kana: 'ぎゃ', romaji: 'gya' },
  { kana: 'ぎゅ', romaji: 'gyu' },
  { kana: 'ぎょ', romaji: 'gyo' },

  // Youon Dakuon - Z-row
  { kana: 'じゃ', romaji: 'ja' },
  { kana: 'じゅ', romaji: 'ju' },
  { kana: 'じょ', romaji: 'jo' },

  // Youon Dakuon - B-row
  { kana: 'びゃ', romaji: 'bya' },
  { kana: 'びゅ', romaji: 'byu' },
  { kana: 'びょ', romaji: 'byo' },

  // Youon Handakuon - P-row
  { kana: 'ぴゃ', romaji: 'pya' },
  { kana: 'ぴゅ', romaji: 'pyu' },
  { kana: 'ぴょ', romaji: 'pyo' },
]
