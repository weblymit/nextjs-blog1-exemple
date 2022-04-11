import React from 'react'
import FooterTitleSection from './FooterTitleSection'
import { IoChevronForwardSharp } from 'react-icons/io5'
import Link from 'next/link'

const NavComps = ({ title }) => {
  return (
    <Link href="#">
      <a className="flex items-center space-x-2 pb-4">
        <IoChevronForwardSharp />
        <p>{title}</p>
      </a>
    </Link>
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
