import React from 'react'
import FooterTiteSection from './FooterTitleSection'

const CardFooter = ({src}) => {
  return (
    <div className="flex justify-between space-x-7 mb-6">
      <div className="w-52">
        <img src={src} alt="cover post" className='rounded-lg' />
      </div>
      <div className="text-sm text-gray-300">
        <p>Even the all-powerful Pointing has no control about</p>
        <p className='pt-4 font-light text-gray-400 text-xs'>Oct. 16, 2019 Admin 19</p>
      </div>
    </div>
  )
}
export default function FooterSection2() {
  return (
    <div>
      <FooterTiteSection title="latest News" />
      <CardFooter src="/image1.webp" />
      <CardFooter src="/image3.webp" />
    </div>
  )
}
