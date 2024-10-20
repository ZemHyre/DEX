import { useState } from 'react'
import { useAccount, useDisconnect, useEnsName } from 'wagmi'
import { useNavigate } from 'react-router-dom'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const [showHoverBox, setShowHoverBox] = useState(false)
  const history = useNavigate()

  const truncatedAddress = address ? `${address.slice(0, 10)}...` : ''

  const handleCopy = () => {
    navigator.clipboard.writeText(address)
  }

  const handleClick = (event) => {
    event.stopPropagation();
    setShowHoverBox(!showHoverBox);
  }

  const handleViewProfile = () => {
    history(`/profile/`)
  }

  return (
    <div>
      {address && (
        <div className="relative">
          <div
            className="text-white hover:text-gray-400"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          >
            {ensName ? `${ensName}` : ''}
            <strong>{truncatedAddress}</strong>
          </div>
          {showHoverBox && (
              <div className="z-0 absolute top-full right-0 mt-2 text-black bg-white border border-gray-200 rounded-md shadow-lg">
                <div className="px-4 py-2">
                  Full Address: <strong>{address}</strong>
                </div>
                <div className="border-t border-gray-200"></div>
                <button className="block w-full text-right px-4 py-2 hover:bg-gray-100" onClick={handleCopy}>
                  Copy Address
                </button>
                <div className="border-t border-gray-200"></div>
                <button className="block w-full text-right px-4 py-2 hover:bg-gray-100" onClick={handleViewProfile}>
                  View Profile
                </button>
              </div>
          )}
        </div>
      )}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}
