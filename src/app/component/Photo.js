import React from 'react'
import Image from 'next/image'

export default function Photo({ src }) {
  return (
    <div className='flex flex-shrink-0 w-32 h-32 shadow-md'>
      <Image className=' w-full' src={src} alt='photo' width={100} height={150} />
    </div>
  )
}
