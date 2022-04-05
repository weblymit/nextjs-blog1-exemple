import React from 'react'
import NavItem from '../components/NavItem'

export default function Navbar() {
  return (
    <div className="top-2s container absolute left-0 right-0 z-10 flex justify-between bg-transparent pt-10 text-white">
      <div className="logo">
        <h2 className="text-2xl font-black">
          Read<span className="text-yellow-300">it</span>.
        </h2>
      </div>
      <ul className="flex items-center justify-between space-x-10 text-lg">
        <NavItem href="/" name="Home" />
        <NavItem href="/articles" name="Articles" />
        <NavItem href="/team" name="Team" />
        <NavItem href="/contact" name="Contact" />
      </ul>
    </div>
  )
}
