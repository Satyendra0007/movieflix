import React from 'react'
import Image from 'next/image'
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Video({ src, duration, desc }) {
  return (
    <div className="flex flex-shrink-0 flex-col w-72 ">
      <div className="image relative ">
        <Image className='w-full' src={src} height={40} width={100} alt="spiderman banner"></Image>
        <div className="absolute w-full h-full top-0 left-0 right-0 bg-gradient-to-b from-transparent from-70% to-black flex items-end ">
          <div className='flex items-center gap-3 p-2'>
            <FaRegCirclePlay fill='white' size={24} />
            <span className='tracking-wide text-white text-sm'> Clip {duration}</span>
          </div>
        </div>
      </div>
      <div className="desc py-2">
        <p>{desc}</p>
      </div>
    </div>
  )
}

