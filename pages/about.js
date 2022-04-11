import Image from 'next/image'
import React from 'react'
import HeroPost from '../components/HeroPost'
import Tabs from '../components/Tabs'

export default function About() {
  const src =
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  return (
    <>
      <HeroPost title="About" />
      <div className="container flex justify-center items-center space-x-12 py-28">
        <div className="max-w-xld w-2/3">
          <Image
            src={src}
            alt="Picture of the author"
            width={500}
            height={700}
            layout="responsive"
            className=""
          />
        </div>
        <div className="">
          <div className="">
            <p className="pb-2 text-gray-600">Welcome to Readit</p>
            <h2 className="text-5xl font-bold  ">
              We give you the best articles you want.
            </h2>
            <p className="pt-5 font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              earum, corrupti doloribus odit iure repellendus iusto hic eligendi
              corporis impedit magnam.
            </p>
          </div>
          <div className="pt-20">
            <Tabs />
          </div>
        </div>
      </div>
    </>
  )
}
