import React from 'react'

const GreenText = ({children}) => {
  return (
    <span className=' bg-clip-text bg-gradient-to-br  text-transparent from-emerald-500 via-green-400 to-lime-400'>{children}</span>
  )
}

export default GreenText