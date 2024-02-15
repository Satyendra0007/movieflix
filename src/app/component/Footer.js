"use client"
import React from 'react'
import { FaTiktok, FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube, FaAmazon } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-black text-white'>
      <div className="buttons">
        <div className="button py-3 text-center bg-neutral-900">
          <button className='outline-none py-2 px-6 bg-yellow-500 font-semibold text-black text-sm rounded-md'>Get the IMDb App</button>
        </div>
        <div className="button py-3 text-center bg-neutral-950">
          <button className='outline-none py-2 px-6 bg-neutral-900 font-semibold text-blue-500 text-sm rounded-md'>Sign in for more access</button>
        </div>
      </div>
      <div className="logos flex justify-evenly items-center py-4 md:w-1/3 mx-auto">
        <span className='md:p-4 cursor-pointer rounded-full hover:bg-white/5'>
          <FaTiktok size={20} />
        </span>
        <span className='md:p-4 cursor-pointer rounded-full hover:bg-white/5'>
          <FaInstagram size={20} />
        </span>
        <span className='md:p-4 cursor-pointer rounded-full hover:bg-white/5'>
          <FaTwitter size={20} />
        </span>
        <span className='md:p-4 cursor-pointer rounded-full hover:bg-white/5'>
          <FaYoutube size={20} />
        </span>
        <span className='md:p-4 cursor-pointer rounded-full hover:bg-white/5'>
          <FaFacebookSquare size={20} />
        </span>

      </div>
      <div className="options"></div>
      <div className="add"></div>
      <div className="flex justify-center items-center py-4 gap-2">
        an <FaAmazon /> Company
      </div>
      <div className="text-xs text-white/50 text-center py-2">
        &copy; 1990-2024 by IMDb.com, Inc
      </div>
    </div>
  )
}
