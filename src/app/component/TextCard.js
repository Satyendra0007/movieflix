import React from 'react'

export default function TextCard({ title, desc }) {
  return (
    <div className='pb-4 bg-gray-100 shadow-full border border-gray-100 rounded-md'>
      <div className="content p-4 h-36  overflow-hidden ">
        <h1 className='font-bold '>{title}</h1>
        <p className='text-sm' dangerouslySetInnerHTML={{ __html: desc }} ></p>
      </div>
    </div >
  )
}
