import React from 'react'

export default function Budget({ type, price, currency }) {
  return (
    <div className="px-4 md:flex items-center gap-x-4">
      <span><strong>{type} : </strong></span>
      <div className="lists py-1">
        <div className=' text-sm font-semibold capitalize '>
          {price + " (" + currency + ")"}
        </div>
      </div>
    </div>
  )
}
