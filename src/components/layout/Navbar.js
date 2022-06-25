import React from 'react'
import { Link } from 'react-router-dom'
import BrowseDropdown from './BrowseDropdown'
import ConnectWallet from './ConnectWallet'
import Logo from './Logo'
import MiscDropdown from './MiscDropdown'
import RegisterDropdown from './RegisterDropdown'

const Navbar = () => {
  
  return (
    <header className='z-50 px-6 py-4 bg-white'>
      <nav className='flex items-center justify-between'>
        <Link to='/'>
        <Logo/>
        </Link>
        <div className='flex items-center gap-4'>
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