import Image from 'next/image'
import React from 'react'
import HeroPost from '../../components/HeroPost'
import img from '../../public/image1.webp'

export default function BlogPost({ post }) {
  return (
    <div>
      <HeroPost title={post.title} id={post.id} />
      <div className="mx-auto max-w-2xl py-28">
        <p className="text-4xl font-bold first-letter:uppercase pb-12">
          {post.title}
        </p>
        <div className="">
          <Image src={img} alt="Picture of the author" />
          {/* <img src="/image1.webp" alt="" /> */}
        </div>
        <div className="pt-12">
          <p className='text-xl font-light text-gray-600'>{post.body}</p>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const api = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20'
  const res = await fetch(api)
  const posts = await res.json()

  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  // const api = 'https://jsonplaceholder.typicode.com/posts/' + id
  const api = `https://jsonplaceholder.typicode.com/posts/${id}`
  const res = await fetch(api)
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}
