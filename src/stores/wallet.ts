import { reactive } from 'vue'

// Type for ethereum provider
interface EthereumProvider {
  // eslint-disable-next-line no-unused-vars
  request: (args: { method: string; params?: any[] }) => Promise<any>
  isMetaMask?: boolean
}

// Extend Window interface to include ethereum
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ethereum?: EthereumProvider
  }
}

export const wallet = reactive({
  address: null as string | null,
  isConnected: false,

  async connect() {
    if (!window.ethereum) {
      alert('MetaMask or compatible wallet required')
      return false
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      this.address = accounts[0]
      this.isConnected = true
      return true
    } catch (error) {
      console.error('Failed to connect wallet:', error)
      return false
    }
  },

  async signMessage(message: string) {
    if (!this.address) {
      throw new Error('Wallet not connected')
    }

    try {
      return await window.ethereum!.request({
        method: 'personal_sign',
        params: [message, this.address],
      })
    } catch (error) {
      console.error('Failed to sign message:', error)
      throw error
    }
  },

  disconnect() {
    this.address = null
    this.isConnected = false
  },
})
