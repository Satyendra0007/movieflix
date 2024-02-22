import React from 'react'
import Image from 'next/image'
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Video({ src, duration, desc, type }) {

  const formatDuration = (duration => {
    let seconds = parseInt(duration);
    return `${Math.floor(seconds / 60)}m  ${Math.floor((seconds % 60))}s`
  })

  return (
    <div className="flex flex-shrink-0 flex-col w-52 ">
      <div className="image relative ">
        <Image className='w-full h-40' src={src} height={40} width={100} alt="spiderman banner"></Image>
        <div className="absolute w-full h-full top-0 left-0 right-0 bg-gradient-to-b from-transparent from-70% to-black flex items-end ">
          <div className='flex items-center gap-3 p-2'>
            <FaRegCirclePlay fill='white' size={24} />
            <span className='tracking-wide text-white text-sm'> {type} {formatDuration(duration)}</span>
          </div>
        </div>
      </div>
      <div className="desc py-2">
        <p>{desc}</p>
      </div>
    </div>
  )
}

