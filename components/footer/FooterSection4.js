import React from 'react'
import FooterTitleSection from './FooterTitleSection'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'

export default function FooterSection4() {
  return (
    <div className=''>
      <FooterTitleSection title="Have a Questions?" />
      <div className="space-y-5">
        <div className="items-centers flex space-x-3">
          <FaMapMarkerAlt className="text-2xl" />
          <p className="text-gray-400">
            203 Fake St. Mountain View, San Francisco, California, USA
          </p>
        </div>
        <div className="items-centers flex space-x-3 ">
          <BsTelephoneFill className="text-xl" />
          <p className="">+2 392 3929 210</p>
        </div>
        <div className="items-centers flex space-x-3">
          <FaMapMarkerAlt className="text-2xl" />
          <p className="">info@yourdomain.com</p>
        </div>
      </div>
    </div>
  )
}
