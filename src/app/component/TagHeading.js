import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";

export default function TagHeading({ type, count, showArrow }) {
  return (
    <div className='flex items-center p-3 gap-5'>
      <div className="type flex items-center gap-2">
        <div className="pipe w-1 h-8 bg-yellow-400 rounded-md"></div>
        <div className="text-xl font-bold">{type}</div>
      </div>
      {showArrow && <div className="arrow flex items-center gap-1">
        <span className='text-sm'>{count}</span>
        <FaGreaterThan size={20} />
      </div>}
    </div>

  )
}
