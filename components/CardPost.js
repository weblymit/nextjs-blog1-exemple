import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function CardPost() {
  const img = 'url("image1.webp")'
  return (
    <div className="max-w-sm">
      <Link href="#">
        <a className="transition duration-300 ease-in-out hover:text-gray-500">
          <div
            className="relative h-[400px] w-full bg-cover bg-center"
            style={{ backgroundImage: img }}
          ></div>
          <div className="p-4">
            <div className=" absolute -mt-[72px] flex items-center bg-[#ffd369] p-2">
              <div className="w-20k px-3 text-center">
                <span className="text-4xl">18</span>
              </div>
              <div className="text-sm font-light">
                <p>2019</p>
                <p>october</p>
              </div>
            </div>
            <h3 className="pb-4 text-2xl font-black">
              All you want to know about industrial laws
            </h3>
            <p className="text-lgpp leading-relaxed text-gray-500">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="flex space-x-2 pt-5 text-gray-400">
              <IoIosArrowRoundForward className="" />
              <p className="text-sm uppercase hover:text-gray-800">Read more</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
