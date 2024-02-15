import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function Suggestion({ src, rating, title }) {
  return (
    <div className='shadow-full w-32 flex flex-col flex-shrink-0 border border-gray-300 rounded-md '>
      <div className="image w-full h-48 relative">
        <Image className='w-full h-full' src={src} alt="Image" width={200} height={200} ></Image>
        <div className='absolute top-0 left-0 bg-black/70 p-2'>
          <FaPlus size={20} fill='white' />
        </div>
      </div>
      <div className="cantent py-3 space-y-2 min-h-32">
        <div className="rate flex items-center justify-between px-3 ">
          <span className='flex items-center gap-x-1 text-gray-800'><FaStar fill='yellow' />{rating}</span>
          <span className='text-blue-800'><FaRegStar /></span>
        </div>
        <div className="title text-center">{title}</div>
      </div>
      <div className="button py-5 text-center">
        <button className='outline-none p-2 bg-neutral-200 text-blue-800 font-bold text-sm rounded-md'>Watch options</button>
      </div>
    </div>
  )
}
