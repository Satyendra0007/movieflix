import React from 'react'

export default function TextCard({ title, desc }) {
  return (
    <div className='bg-gray-100 shadow-full border border-gray-100 rounded-md'>
      <div className="content p-4" >
        <h1 className='font-bold md:text-lg'>{title}</h1>
        <p className='text-sm md:text-base' dangerouslySetInnerHTML={{ __html: desc }} ></p>
      </div>
    </div >
  )
}
