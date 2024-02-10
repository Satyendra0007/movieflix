"use client"
import React from 'react'
import { FaTiktok, FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube, FaAmazon } from "react-icons/fa";

export default function Footer() {
  const logos = [<FaTiktok size={20} />, <FaInstagram size={20} />, <FaTwitter size={20} />, <FaYoutube size={20} />, <FaFacebookSquare size={20} />];

  return (
    <div className='bg-black text-white'>
      <div className="buttons">
        <div className="button py-3 text-center bg-neutral-800">
          <button className='outline-none py-2 px-6 bg-yellow-500 font-semibold text-black text-sm rounded-md'>Get the IMDb App</button>
        </div>
        <div className="button py-3 text-center bg-neutral-900">
          <button className='outline-none py-2 px-6 bg-neutral-900 font-semibold text-blue-500 text-sm rounded-md'>Sign in for more access</button>
        </div>
      </div>
      <div className="logos flex justify-evenly items-center py-4">
        {logos.map((logo, index) => {
          return <span key={index} >{logo}</span>
        })}
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
