import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../icons/logo-default.png'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'
import { Account } from '../Account.jsx'
import { WalletOptions } from '../WalletOptions.jsx'
import { useAccount } from 'wagmi'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { isConnected } = useAccount()

  function ConnectWallet() { 
    if (isConnected) return <Account /> 
    return <WalletOptions /> 
  }

  return (
    <div className='w-[100%]'>
      <nav className="flex justify-between items-center py-3 pt-6">
        <div className="flex">
          <a href="/">
            <img src={logo} alt="Logo" className="h-10 w-18" />
          </a>
        </div>

        <ul className="list-none flex space-x-8 justify-center font-poppins font-normal cursor-pointer text-[14px] text-white hidden md:flex">
          <li><Link to="/">Home</Link></li>
        </ul>

        <div className="hidden md:block space-x-2 text-white text-right">
            {ConnectWallet()}
        </div>

        <div className="md:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 object-contain menu-icon"
            onClick={() => {
              setToggle((prev) => !prev)
            }}
          />
        </div>
      </nav>

      {toggle && (
        <ul className="md:hidden menu-open border-nav flex flex-col justify-center items-center">
          <div className='font-poppins font-normal text-[18px] text-white pt-4 pb-8 space-y-4'>
            <li className="flex justify-center items-center">
              <a href="/" className="text-nav-menu">
                Home
              </a>
            </li>
          </div>
          <li>
            <div className="space-x-2 text-white text-center">
              {ConnectWallet()}
            </div>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Navbar
