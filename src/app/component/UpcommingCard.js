import React from 'react'
import { BsBookmarkPlus } from "react-icons/bs";
import { IoInformationCircleOutline } from "react-icons/io5";
import Image from 'next/image';

export default function UpcommingCard({ title }) {

  return (
    <div className="item flex p-3 justify-between">
      <div className="content flex items-center gap-x-3 ">
        {/* <div className="text-[2rem]"><BsBookmarkPlus /></div> */}
        {title.primaryImage ? <Image className='w-16' src={title.primaryImage.url} height={100} width={100} alt="thumbnail" priority={true} ></Image> : <div className="text-[4rem]"><BsBookmarkPlus /></div>}
        <div>
          <div className="titte font-bold">{title.originalTitleText.text}</div>
          <div className="production text-sm text-blue-500">{title.productionStatus.currentProductionStage.text}</div>
        </div>
      </div>
      <div className="button flex h-full items-center">
        <button className='text-2xl text-blue-500'><IoInformationCircleOutline /></button>
      </div>
    </div>
  )
}
