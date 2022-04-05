import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-20 text-white ">
      <div className="container grid grid-cols-4 gap-3">
        <div className="">
          <div className="logo">
            <h2 className="text-3xl font-black pb-8">
              Read<span className="text-yellow-300">it</span>.
            </h2>
          </div>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul>
            <li>facebook</li>
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
