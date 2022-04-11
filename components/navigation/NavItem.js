import Link from 'next/link'
import React from 'react'

export default function NavItem(props) {
  return (
    <li>
      <Link href={props.href}>
        <a>{props.name}</a>
      </Link>
    </li>
  )
}
