import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'

export default function Navbar() { 
  return (
    <div className="top-2s container absolute left-0 right-0 z-10 flex justify-between bg-transparent pt-10 text-white">
      <Link href="/">
        <a className="text-2xl font-black">
          Read<span className="text-yellow-300">it</span>.
        </a>
      </Link>
      <ul className="flex items-center justify-between space-x-10 text-lg">
        <NavItem href="/" name="Home" />
        <NavItem href="/about" name="About" />
        <NavItem href="/contact" name="Contact" />
      </ul>
    </div>
  )
}
