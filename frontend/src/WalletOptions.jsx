import * as React from 'react'
import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  const filteredConnectors = connectors.filter(connector => 
    connector.name === 'WalletConnect' || connector.name === 'MetaMask'
  )

  return filteredConnectors.map((connector) => (
    <button className='w-28 h-8 btn-text font-bold btn-hollow rounded-full truncate' key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}