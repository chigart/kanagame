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
  isSigning: false,

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

  async checkConnection(): Promise<boolean> {
    if (!window.ethereum) {
      return false
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      })
      return accounts.length > 0
    } catch (error) {
      console.error('Failed to check wallet connection:', error)
      return false
    }
  },

  async signMessage(message: string, timeoutMs: number = 30000): Promise<string> {
    if (!this.address) {
      throw new Error('Wallet not connected')
    }

    if (this.isSigning) {
      throw new Error('Signature already in progress')
    }

    // Check if MetaMask is still connected
    const isStillConnected = await this.checkConnection()
    if (!isStillConnected) {
      throw new Error('Wallet disconnected. Please reconnect.')
    }

    this.isSigning = true

    try {
      const signaturePromise = window.ethereum!.request({
        method: 'personal_sign',
        params: [message, this.address],
      })

      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => {
          reject(new Error('Signature request timed out. Please try again.'))
        }, timeoutMs)
      })

      const signature = await Promise.race([signaturePromise, timeoutPromise])
      return signature
    } catch (error) {
      console.error('Failed to sign message:', error)
      throw error
    } finally {
      this.isSigning = false
    }
  },

  disconnect() {
    this.address = null
    this.isConnected = false
    this.isSigning = false
  },
})
