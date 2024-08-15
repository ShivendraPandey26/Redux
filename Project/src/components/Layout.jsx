import React from 'react'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <>
    <Navbar />
    <div className='contents'>
            {children}
    </div>
    </>
  )
}

export default Layout