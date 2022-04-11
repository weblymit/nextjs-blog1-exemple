import React from 'react'
import FooterSection1 from './FooterSection1'
import FooterSection2 from './FooterSection2'
import FooterSection3 from './FooterSection3'
import FooterSection4 from './FooterSection4'
import { IoHeartSharp } from 'react-icons/io5'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-28 text-white ">
      <div className="container flex space-x-6">
        <div className="flex-1">
          <FooterSection1 />
        </div>
        <div className="flex-1">
          <FooterSection2 />
        </div>
        <div className="flex-1">
          <FooterSection3 />
        </div>
        <div className="flex-1">
          <FooterSection4 />
        </div>
      </div>
      <p className="pt-16 text-center text-gray-400">
        Copyright © {new Date().getFullYear()} All rights reserved ♥️
      </p>
    </footer>
  )
}
