import React from 'react'
import Image from 'next/image'

export default function Photo({ src }) {
  return (
    <div className='flex flex-shrink-0 shadow-md'>
      <Image className='w-36  h-36 md:w-44 md:h-44' src={src} alt='photo' width={100} height={150} />
    </div>
  )
}
