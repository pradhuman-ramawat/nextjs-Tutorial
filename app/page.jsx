import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return ( <>
      <h1>Welcome To HomePage</h1>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Team</Link></li>
      </ul>
    </>
  )
}

export default HomePage