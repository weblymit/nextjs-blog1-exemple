import React from 'react'
import ItemPaginate from './ItemPaginate'

export default function Paginate() {
  return (
    <div className="flex justify-center space-x-3">
      <ItemPaginate pageNumber="1" />
      <ItemPaginate pageNumber="2" />
      <ItemPaginate pageNumber="3" />
      <ItemPaginate pageNumber="4" />
      <ItemPaginate pageNumber="5" />
    </div>
  )
}
