import React from 'react'

export default function AwardSection({ wins, nomination, award, awardCount }) {
  return (
    <section className='py-2'>
      <div className=" awards p-5 bg-gray-100">
        <div className=' border border-yellow-500  shadow-md'>
          <div className="bg h-6 bg-yellow-500"></div>
          <div className="p-3">
            <p className='font-bold'>Nominated for {awardCount} {award}</p>
            <p className=''>{wins} wins & {nomination} niminations total</p>
          </div>
        </div>
      </div>
    </section>
  )
}
