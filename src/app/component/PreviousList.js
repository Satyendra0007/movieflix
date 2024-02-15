import React, { useState } from 'react'
import { MdExpandLess } from "react-icons/md";
import { useRef } from 'react';
import PreviousCard from './PreviousCard';
import { MdOutlineExpandMore } from "react-icons/md";
import { LuDot } from "react-icons/lu";

export default function PreviousList({ type, dataList = [], total }) {
  const list = useRef();
  const [show, setShow] = useState(false);

  const expandList = () => {
    list.current.style.height = `${show ? "0px" : "fit-content"}`
    setShow(!show);
  }
  return (
    <>
      <div className="card relative">
        <div className="flex items-center justify-between px-4 py-3 sticky top-0 bg-white" onClick={expandList}>
          <div className='flex items-center' >
            <h2 className='text-lg font-semibold text-gray-700 '>{type} </h2>
            <span><LuDot /></span>
            <span className='font-bold text-gray-500'>{total}</span>
          </div>
          <button className='text-xl' >
            {show ? <MdExpandLess /> : <MdOutlineExpandMore />}
          </button>

        </div>
        <div ref={list} className="list h-0 overflow-hidden">
          {dataList.map((elem, index) => {
            return <PreviousCard key={index} title={elem.node.title} />
          })}
        </div>
      </div>
      <div className="lin h-[1px] w-[95%] md:w-full bg-gray-300 mx-auto"></div>
    </>
  )
}