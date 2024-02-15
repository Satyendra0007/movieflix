import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function PeopleCard({ elem }) {
  const route = useRouter();
  return (
    <div className='card p-4 bg-gray-50 border border-gray-400 rounded-md shadow-full w-56'>
      <div className="image ">
        <Image className='w-24 h-24 mx-auto rounded-full' src={elem.avatarImageModel.url} height={100} width={100} alt="image" priority={true}></Image>
      </div>
      <div className="content p-2 text-center min-h-32">
        <strong className=''>{elem.displayNameText}</strong>
        <p>{elem.knownForJobCategory}</p>
        <p>{elem.knownForTitleText}</p>
      </div>
      <div className="button flex justify-center">
        {/* <Link href={`/people/${elem.id}`}> */}
        <button onClick={() => route.push(`/people/${elem.id}`)} className="outline-none py-2 px-8 bg-yellow-400 text-black font-semibold text-sm rounded-full hover:bg-yellow-300">View</button>
        {/* </Link> */}
      </div>
    </div>
  )
}
