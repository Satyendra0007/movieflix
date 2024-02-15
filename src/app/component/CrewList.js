import React from 'react'
import { LuDot } from "react-icons/lu";

export default function CrewList({ type, list = [] }) {

  return (
    <div className="px-4 py-2 md:flex items-center gap-x-3">
      <span><strong>{type}</strong></span>
      <div className="lists ">
        {list.map((obj, key) => {
          return (
            <div key={key} className='inline-flex items-center text-blue-900 capitalize text-sm md:text-base md:font-semibold '>
              {obj.name.nameText.text}{(key !== (list.length - 1)) && <LuDot size={23} color="blue" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
