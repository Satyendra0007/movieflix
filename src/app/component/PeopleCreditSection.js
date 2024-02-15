import React, { useState } from 'react'
import TagHeading from './TagHeading'
import Gener from './Gener'
import UpcommingList from './UpcommingList';
import PreviousList from './PreviousList';

export default function PeopleCreditSection({ upcomingList = [], previousList = [], profession = [] }) {

  return (
    <div>
      <TagHeading type={'Credits'} />
      <div className="credit flex gap-2 overflow-auto p-2 hide-sroll ">
        {profession.map(prof => {
          return <Gener key={prof.category.id} gener={prof.category.text} movie={false} />
        })}
      </div>

      <div className="box">
        <h1 className='text-xl font-bold p-4'>Upcomming</h1>
        <div className="lin h-[1px] w-[95%] md:w-full bg-gray-300 mx-auto"></div>
        <div className="list">
          {upcomingList.map(item => {
            return <UpcommingList key={item.category.id} type={item.category.text} total={item.credits.total} dataList={item.credits.edges} />
          })}
        </div>
      </div>

      <div className="box ">
        <h1 className='text-xl font-bold p-4'>Previous</h1>
        <div className="lin h-[1px] w-[95%] md:w-full bg-gray-300 mx-auto"></div>
        <div className="list">
          {previousList.map(elem => {
            return <PreviousList key={elem.category.id} type={elem.category.text} total={elem.credits.total} dataList={elem.credits.edges} />
          })}
        </div>
      </div>
    </div>

  )
}
