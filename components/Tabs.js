import React, { useState } from 'react'

export default function Tabs() {
  const [openTab, setOpenTab] = useState(1)

  const handleClick = (e, num) => {
    e.preventDefault()
    setOpenTab(num)
  }

  return (
    <div className="max-w-lg">
      <div className="">
        <ul className="flex space-x-5">
          <li>
            <a
              className={`${
                openTab === 1
                  ? 'bg-yellow-300 font-black text-gray-900 shadow-xl'
                  : 'bg-gray-100'
              }  cursor-pointer rounded-lg p-4 font-light text-gray-500`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(1)
              }}
            >
              Our Mission
            </a>
          </li>
          <li>
            <a
              className={`${
                openTab === 2
                  ? 'bg-yellow-300 font-black text-gray-900 shadow-xl'
                  : 'bg-gray-100'
              }  cursor-pointer rounded-lg p-4 font-light text-gray-500`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(2)
              }}
            >
              Our Vision
            </a>
          </li>
          <li>
            <a
              className={`${
                openTab === 3
                  ? 'bg-yellow-300 font-black text-gray-900 shadow-xl'
                  : 'bg-gray-100'
              }  cursor-pointer rounded-lg p-4 font-light text-gray-500`}
              onClick={(e) => {
                e.preventDefault()
                setOpenTab(3)
              }}
            >
              Our Value
            </a>
          </li>
        </ul>
        <div className="mt-8 rounded bg-gray-100 p-10 shadow">
          <div className={openTab === 1 ? 'block' : 'hidden'}>
            <p className="text-lg font-bold">Our mission</p>
            Hello World TAB 2
          </div>
          <div className={openTab === 2 ? 'block' : 'hidden'}>
            <p className="text-lg font-bold">Our vision</p>
            Hello World TAB 2
          </div>
          <div className={openTab === 3 ? 'block' : 'hidden'}>
            <p className="text-lg font-bold">Our value</p>
            Hello World TAB 3
          </div>
        </div>
      </div>
    </div>
  )
}
