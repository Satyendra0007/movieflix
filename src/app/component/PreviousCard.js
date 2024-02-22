import React from 'react'
import { IoInformationCircleOutline } from "react-icons/io5";
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import { BsBookmarkPlus } from "react-icons/bs";

export default function PreviousCard({ title, size = "100%" }) {
  return (
    <div className={`item flex p-3 justify-between w-[${size}] bg-white`}>
      <div className="content flex items-center gap-x-3 ">
        {title.primaryImage ? <Image className='w-16' src={title.primaryImage.url} height={100} width={100} alt="thumbnail" priority={true} ></Image> : <div className="text-[4rem]"><BsBookmarkPlus /></div>}
        <div className='space-y-1'>
          <div className="font-bold">{title.originalTitleText.text}</div>
          <div className=" text-sm text-gray-600 flex items-center gap-2">
            <span className='flex items-center gap-1 '><FaStar fill='yellow' />{title.ratingsSummary.aggregateRating}</span>
            <span>{title.titleType.text}</span>
          </div>
          <div className="text-sm text-gray-600 space-x-2">
            <span className='text-blue-500 font-bold'>{title.titleType.canHaveEpisodes ? title.episodes.displayableSeasons.total + " Season " : " "}  </span>
            <span>{title.releaseYear.year}</span>
          </div>
        </div>
      </div>
      <div className="button flex item-center">
        <button className='text-2xl text-blue-800 font-bold'><IoInformationCircleOutline /></button>
      </div>
    </div>
  )
}

