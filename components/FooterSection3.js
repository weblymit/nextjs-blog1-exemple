import React from 'react'
import FooterTitleSection from './FooterTitleSection'
import { IoChevronForwardSharp } from 'react-icons/io5'

const NavComps = ({ title }) => {
  return (
    <div className="flex items-center space-x-2 pb-4">
      <IoChevronForwardSharp />
      <p>{title}</p>
    </div>
  )
}
export default function FooterSection3() {
  return (
    <div className="flex justify-center">
      <div className="">
        <FooterTitleSection title="Information" />
        <NavComps title="Home" />
        <NavComps title="About" />
        <NavComps title="Articles" />
        <NavComps title="Contact" />
      </div>
    </div>
  )
}
