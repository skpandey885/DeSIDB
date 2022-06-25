import React from 'react'
import { Link } from 'react-router-dom'
import BrowseDropdown from './BrowseDropdown'
import ConnectWallet from './ConnectWallet'
import Logo from './Logo'
import MiscDropdown from './MiscDropdown'
import RegisterDropdown from './RegisterDropdown'

const Navbar = () => {
  
  return (
    <header className='border-b bg-white py-4 px-6 z-50'>
      <nav className='flex items-center justify-between'>
        <Link to='/'>
        <Logo/>
        </Link>
        <div className='flex gap-4 items-center'>
          <RegisterDropdown/>
          <BrowseDropdown/>
          <MiscDropdown/>
          <ConnectWallet/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar