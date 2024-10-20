import { http, createConfig } from 'wagmi'
import { defineChain } from 'viem'
import { injected, safe, walletConnect } from 'wagmi/connectors'

const projectId = '04d209242061543a0bb8f4847df0fe89'

const vu = defineChain({
  id: 3_1337,
  name: 'VU',
  network: 'vu',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://193.219.91.103:8545/'] },
    public: { http: ['http://193.219.91.103:8545/'] },
  },
})

export const config = createConfig({
  chains: [vu],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    safe(),
  ],
  qrModalOptions: { 
    themeMode: 'dark', 
  },
  transports: {
    [vu.id]: http()
  },
})