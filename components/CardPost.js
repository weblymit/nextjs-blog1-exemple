import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function CardPost({ img, post }) {
  return (
    <div className="max-w-sm">
      <Link href={`/blog/${post.id}`}>
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
              <div className="text-xs font-light">
                <p>2019</p>
                <p>october</p>
              </div>
            </div>
            <h3 className="pb-4 text-2xl font-black first-letter:uppercase">
              {post.title}
            </h3>
            <p className="text-lgpp leading-relaxed text-gray-500 first-letter:uppercase">
              {post.body}
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
