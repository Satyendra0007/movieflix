import React from 'react'
import Image from 'next/image'

export default function Cast({ src, name, charecter }) {
  return (
    <div className='p-1 flex flex-col flex-shrink-0 gap-y-1 w-40 justify-center items-center'>
      <div className="image">
        <Image className='w-32 h-32 rounded-full' src={src} alt='image' width={100} height={100}></Image>
      </div>
      <div className="info text-center">
        <div className="text-sm font-bold">{name}</div>
        <div className="text-xs">{charecter}</div>
      </div>
    </div>
  )
}
