import React from 'react'

export default function Gener({ gener, movie = true }) {
  return (
    <>
      {movie ? (<div className='py-1 px-3 inline-flex border border-white/30 rounded-full text-sm flex-shrink-0' >
        {gener}
      </div>) : (<div className='py-1 px-5 inline-flex border border-blue-500 bg-blue-200 text-blue-500  rounded-full text-sm flex-shrink-0' >
        {gener}
      </div>)}

    </>
  )
}
