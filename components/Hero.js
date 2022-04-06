import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io'

export default function Hero() {
  const imageHero = "url('/image2.webp')"
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat pt-[30vh] "
      style={{ backgroundImage: imageHero }}
    >
      {/* overlay div */}
      <div className="overlay absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-r from-[#f200ff] to-[#ffba42] opacity-80" />
      <div className="container relative flex h-[25%]s flex-col text-white">
        <h2 className="text-xl">Hello! Welcome to</h2>
        <h1 className="mb-5s text-[10vw] font-bold ">Readit blog</h1>
        <div className="w-[47vw] text-lg">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="pt-8">
          <IoIosArrowRoundDown className="animate-bounce text-5xl" />
        </div>
      </div>
    </div>
  )
}
