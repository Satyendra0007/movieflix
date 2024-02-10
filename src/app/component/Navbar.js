'use client'
import Link from 'next/link'
import { IoSearch } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useRef } from 'react';
import navData from "@/app/data/navdata.js"
import Logo from './Logo';
// import searchContext from '../context/SeachContext';
// import { useContext } from 'react';

export default function Navbar() {
  const search = useRef();
  const menu = useRef();

  // const a = useContext(searchContext);
  // useEffect(() => {
  //   a.setSearch("apple")
  // }, [])
  // const num = 34;

  const toggleSearch = () => {
    if (search.current.style.transform == "translateY(0px)")
      search.current.style.transform = "translateY(-70px)"
    else
      search.current.style.transform = "translateY(0px)"
  }

  const toogleMenu = () => {
    menu.current.classList.toggle("show-menu")
    document.body.classList.toggle('stop-scroll');
  }

  return (
    <header className='bg-neutral-900/90 text-white py-4 text-center sticky top-0 left-0 right-0 z-10'>
      <div className="flex justify-around items-center">
        <div className="left flex items-center gap-x-4">
          <div className="hamberger space-y-1" onClick={toogleMenu}>
            <div className="h-[2px] w-5 bg-white"></div>
            <div className="h-[2px] w-5 bg-white"></div>
            <div className="h-[2px] w-5 bg-white"></div>
          </div>
          <Logo size={"1rem"} />
        </div>
        <div className="flex items-center gap-x-3">
          <div className="search"><IoSearch onClick={toggleSearch} size={20} /></div>
          <div className="signin">
            <button className='text-sm font-semibold'>Sign In</button>
          </div>
          <div className="button">
            <button className='outline-none text-sm bg-yellow-500 p-2 text-black rounded-md font-bold'>Use app</button>
          </div>
        </div>
      </div>

      <div ref={search} className="search absolute top-0 left-0 z-10 flex items-center justify-between py-4 bg-neutral-900 w-full px-4 -translate-y-16 transition-transform duration-300 ease-in-out">
        <input type="text" className='py-1 px- outline-none bg-inherit placeholder:text-white/30 ' placeholder='Search IMDb' />
        <button className='outline-none ' onClick={toggleSearch}><MdOutlineCancel size={30} className='text-gray-400' /></button>
      </div>

      <div ref={menu} className="  absolute top-0 left-0 w-full bg-black/50 transition-all  ease-in-out duration-500 -translate-x-full">
        <div className="menu w-64 h-screen bg-neutral-900 ">
          <div className="close p-3 flex justify-between items-center ">
            <Logo size={"1rem"} />
            <button className='outline-none '><MdOutlineCancel size={30} className='text-gray-400' onClick={toogleMenu} /></button>
          </div>
          <ul>
            {navData.map((item, index) => {
              return <li key={index}>
                <a href="/">
                  <span className='flex items-center gap-x-4 py-3 ml-5'>
                    {item.icon}
                    {item.name}
                  </span>
                </a>
              </li>
            })}
          </ul>
        </div>
      </div>
    </header >
  )

}

