import React from 'react'
import Link from 'next/link'

export default function Logo({ size }) {
  return (
    <div className="logo ">
      <Link className={`font-extrabold text-yellow-500 p-[6px] rounded-md text-[${size}]`} href="/">MovieFlix</Link>
    </div>
    // <div className="logo ">
    //   <Link className={`font-extrabold bg-yellow-500 text-black p-[6px] rounded-md text-[2rem]`} href="/">MovieFlix</Link>
    // </div>
  )
}
