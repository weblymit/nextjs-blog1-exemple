import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io'

export default function Hero({ title, id }) {
  const imageHero = "url('/image2.webp')"
  return (
    <div
      className="h-screen bg-cover bg-fixed bg-center bg-no-repeat pt-[30vh]"
      style={{ backgroundImage: imageHero }}
    >
      {/* overlay div */}
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-r from-[#f200ff] to-[#ffba42] opacity-80" />
      {/* paragraph */}
      <div className="container relative flex flex-col text-white">
        {id && (
          <span className="mx-auto rounded-full bg-gray-50 p-2 px-6 text-center text-xl text-gray-800">
            Post n°{id}
          </span>
        )}
        <h1 className="w-[60vwd] pt-8 text-center text-[70px] font-black first-letter:uppercase">
          {title}
        </h1>
        <div className="w-[47vw] text-lg"></div>
        <div className="mx-auto pt-8">
          <IoIosArrowRoundDown className="animate-bounce text-5xl" />
        </div>
      </div>
    </div>
  )
}
