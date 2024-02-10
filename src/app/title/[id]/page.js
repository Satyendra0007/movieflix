'use client'
import Image from 'next/image'
import { FaRegStar, FaChevronDown, FaPlus } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import Gener from '@/app/component/Gener';
import { MdVideoLibrary, MdPhotoLibrary } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { AiOutlineStock } from "react-icons/ai";
import TagHeading from '@/app/component/TagHeading';
import Line from '@/app/component/Line';
import Budget from '@/app/component/Budget';
import data from '@/app/data/title';
import searchContext from '@/app/context/SeachContext';
import { useContext } from 'react';
import AwardSection from '@/app/component/AwardSection';
import MediaSection from '@/app/component/MediaSection';
import CrewSection from '@/app/component/CrewSection';
import SuggestionSection from '@/app/component/SuggestionSection';

export default function Page({ params }) {
  const a = useContext(searchContext);
  // console.log(a.search)
  // const url = 'https://ott-details.p.rapidapi.com/advancedsearch?';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'd36623c860msh68f680d6ed06af2p1975acjsn2e690aed07e7',
  //     'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  //   }
  // };

  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.text();
  //   console.log(result);
  // } catch (error) {
  //   console.error(error);
  // }

  const formatDuration = (duration => {
    let seconds = parseInt(duration);
    return `${Math.floor(seconds / 3600)}h  ${Math.floor((seconds % 3600) / 60)}m`
  })

  return (
    <>
      <section className=" bg-gradient-to-b from-zinc-800 to-neutral-900 text-white" >
        <div className="desc px-4 space-y-1 py-2">
          <h1 className='text-2xl '>{data.originalTitleText.text}</h1>
          <div className="flex items-center text-sm text-[#b5b4b4]">
            <span>{data.releaseYear.year}</span> <LuDot size={23} color="#ffffffd4" /> <span>{data.certificate.rating}</span> <LuDot size={23} color="#ffffffd4" /> <span>{formatDuration(data.runtime.seconds)}</span>
          </div>
        </div>
        <div className="banner relative">
          <Image className='w-full' priority={true} src={data.primaryVideos.edges[0].node.thumbnail.url} height={40} width={100} alt="spiderman banner"></Image>
          <div className="content absolute w-full h-full top-0 bg-gradient-to-b from-transparent from-70% to-black flex items-end">
            <span className='opacity-80 p-2 tracking-wide'>Play trailer 2:30 </span>
          </div>
        </div>
        <div className="photo-video flex justify-center gap-1">
          <div className="video py-2 bg-white/5 w-full flex justify-center items-center gap-2 text-sm">
            <MdVideoLibrary />
            <span>{data.videos.total} VIDEOS</span>
          </div>
          <div className="photo py-2 bg-white/5 w-full flex justify-center items-center gap-2 text-sm">
            <MdPhotoLibrary />
            <span>{data.images.total} PHOTOS</span>
          </div>
        </div>
        <div className="info flex p-3 gap-x-3  items-center">
          <div className="image relative  " >
            <Image className='w-96' src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg" width={90} height={100} alt='image'></Image>
            <FaPlus size={20} className='absolute top-1 left-2' />
          </div>
          <div className="about space-y-2">
            <div className="gener flex gap-x-2 overflow-auto hide-scrollbar">
              {data.genres.genres.map((gener) => {
                return <Gener key={gener.id} gener={gener.text} />
              })}
            </div>
            <div className="desc text-xs ">
              {data.plot.plotText.plainText}
            </div>
          </div>
        </div>
        <div className="ratings flex gap-5 p-3">
          <div className="rating flex items-center gap-1">
            <FaStar fill='yellow' />
            7.9  <span className='text-sm text-white/50'>/ 10</span>
            <span className='text-sm text-white/50 ml-1'>{data.meterRanking.currentRank}</span>
          </div>
          <div className="rate flex items-center gap-1 text-blue-500 font-semibold">
            <FaRegStar />
            <span>Rate</span>
          </div>
          <div className="rank flex items-center gap-1">
            <AiOutlineStock className='text-green-600 ' size={20} /><span>602</span>
            <LuDot size={23} color="#ffffffd4" /><span className='text-sm text-white/50'>43</span>
          </div>
        </div>
        <div className="button px-5">
          <button className=' outline-none flex items-center justify-between bg-yellow-500 text-black w-full px-3 py-1 rounded-md'>
            <div className='text flex items-center gap-2'>
              <FaPlus />
              <div className='text-start'>
                <div className='font-bold text-sm'>Add to Watchlist</div>
                <div className='text-xs font-semibold'>Added by 529k users</div>
              </div>
            </div>
            <div className="down"><FaChevronDown /></div>
          </button>
        </div>
        <div className="reviews flex gap-6 py-4 justify-center">
          <div className="user text-center text-blue-600">
            <div className='font-bold'>{data.reviews.total}</div>
            <div className='text-sm'>User riviews</div>
          </div>
          <div className="critic text-center text-blue-600">
            <div className='font-bold'>{data.criticReviewsTotal.total}</div>
            <div className='text-sm'>Critic riviews</div>
          </div>
          <div className="meta text-center text-blue-600">
            <div className='font-bold bg-green-700 text-white inline px-[3px]'>{data.metacritic.metascore.score}</div>
            <div className='text-sm'>Metascore</div>
          </div>
        </div>
      </section>

      <AwardSection wins={data.wins.total} nomination={data.nominations.total} award={data.prestigiousAwardSummary.award.text} awardCount={data.prestigiousAwardSummary.nominations} />

      <MediaSection photos={data.titleMainImages.edges} />

      <CrewSection casts={data.cast.edges} directors={data.directors[0].credits} writers={data.writers[0].credits} />

      <SuggestionSection moreTitles={data.moreLikeThisTitles.edges} />

      <section className="details space-y-2 my-3 bg-gray-100">
        <TagHeading type={"Deatails"} />
        <Line color={"gray-400"} />
        <div className="px-4 space-x-3 py-2">
          <span><strong>{"Release Date"}</strong></span>
          <span className='text-blue-600 capitalize text-sm '>
            {`${data.releaseDate.day} / ${data.releaseDate.month} / ${data.releaseDate.year}`}
          </span>
        </div>
        <Line color={"gray-400"} />
        <div className="px-4 space-x-3 py-2">
          <span><strong>{"Country of origin"}</strong></span>
          <span className='text-blue-600 capitalize text-sm '>
            {data.releaseDate.country.text}
          </span>
        </div>
        <Line color={"gray-400"} />
        <div className="px-4">
          <span><strong>{"Country of origin"}</strong></span>
          <div className="lists ">
            {data.spokenLanguages.spokenLanguages.map((language, key) => {
              return (
                <div key={language.id} className='inline-flex items-center text-blue-500 capitalize text-sm '>
                  {language.text} {(key !== (data.spokenLanguages.spokenLanguages.length - 1)) && <LuDot size={23} color="blue" />}
                </div>
              )
            })}
          </div>
        </div>
        <Line color={"gray-400"} />
        <div className="px-4 space-x-3 py-2">
          <span><strong>{'Also known as'}</strong></span>
          <span className='text-blue-600 capitalize text-sm '>
            {data.akas.edges[0].node.text}
          </span>
        </div>
        <Line color={"gray-400"} />
        <div className="px-4 space-x-3 py-2">
          <span><strong>{'Filming locations'}</strong></span>
          <div className='text-blue-600 capitalize text-sm '>
            {data.filmingLocations.edges[0].node.location}
          </div>
        </div>
      </section>
      <section className="collection space-y-2 bg-gray-100  my-3">
        <TagHeading type={"Box office"} />
        <Budget type={"Budget"} price={data.productionBudget.budget.amount} currency={data.productionBudget.budget.currency} />
        <Budget type={"Lifetime Gross "} price={data.lifetimeGross.total.amount} currency={data.lifetimeGross.total.currency} />
        <Budget type={"Worldwide Gross"} price={data.worldwideGross.total.amount} currency={data.worldwideGross.total.currency} />
      </section>
    </>
  )
}

