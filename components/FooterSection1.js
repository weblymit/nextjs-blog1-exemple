import React from 'react'
import { SiTwitter, SiFacebook, SiInstagram } from 'react-icons/si'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function FooterSection1() {
  const styleContainer = 'rounded-full bg-gray-700 p-2 '
  const styleIcon = 'text-2xl'
  return (
    <div className="">
      <div className="text-gray-200">
        <h2 className="pb-12 text-3xl font-black">
          Read<span className="text-yellow-300">it</span>.
        </h2>
      </div>
      <p className='text-gray-300'>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <div>
        <div className="mt-14 flex space-x-4">
          <div className={styleContainer}>
            <SiTwitter className={styleIcon} />
          </div>
          <div className={styleContainer}>
            <FaFacebookF className={styleIcon} />
          </div>
          <div className={styleContainer}>
            <FaInstagram className={styleIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}
