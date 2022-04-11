import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navigation/Navbar'

export default function Layout({ children }) { 
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow ">{children}</main>
      <Footer />
    </div>
  )
}
