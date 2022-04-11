import Link from 'next/link'
import React from 'react'

export default function ItemPaginate({ pageNumber }) {
  return (
    <Link href="#">
      <a className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 p-2 text-gray-500 shadow">
        <span>{pageNumber}</span>
      </a>
    </Link>
  )
}
