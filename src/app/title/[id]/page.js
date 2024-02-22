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
import dumyData from '@/app/data/title';
import { useEffect, useState } from 'react';
import AwardSection from '@/app/component/AwardSection';
import MediaSection from '@/app/component/MediaSection';
import CrewSection from '@/app/component/CrewSection';
import SuggestionSection from '@/app/component/SuggestionSection';
import CrewList from "@/app/component/CrewList";
import TextCard from '@/app/component/TextCard';
import thumbnail from "@/app/images/thumbnail.jpg"

export default function Page({ params }) {

  const [data, setData] = useState(dumyData);
  const url = `https://imdb146.p.rapidapi.com/v1/title/?id=${params.id}`;
  // const url = `https://imdb146.p.rapidapi.com/v1/title/?id=tt0087884`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "d36623c860msh68f680d6ed06af2p1975acjsn2e690aed07e7",
      'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
    }
  };

  const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const results = await response.json();
    console.log(results)
    setData(results);
  }

  useEffect(() => {
    fetchData(url, options);
  }, [])

  const formatDuration = (duration => {
    let seconds = parseInt(duration);
    return `${Math.floor(seconds / 3600)}h  ${Math.floor((seconds % 3600) / 60)}m`
  })

  return (
    <>
      <section className=" container mx-auto bg-gradient-to-b from-[#1b1918] to-[#1b1b1b] text-white md:hidden " >
        <div className="desc px-4 space-y-1 py-2 ">
          <h1 className='text-2xl '>{data.originalTitleText?.text}</h1>
          <div className="flex items-center text-sm text-[#b5b4b4]">
            <span>{data.releaseYear?.year}</span> <LuDot size={23} color="#ffffffd4" /> <span>{data.certificate?.rating}</span> <LuDot size={23} color="#ffffffd4" /> <span>{formatDuration(data.runtime?.seconds)}</span>
          </div>
        </div>
        <div className="banner relative ">
          <Image className='w-full' priority={true} src={data.primaryVideos?.edges[0]?.node?.thumbnail?.url} height={40} width={100} alt="image"></Image>
          <div className="content absolute w-full h-full top-0 bg-gradient-to-b from-transparent from-70% to-black flex items-end">
            <span className='opacity-80 p-2 tracking-wide'>Play trailer 2:30 </span>
          </div>
        </div>
        <div className="photo-video flex justify-center gap-1">
          <div className="video py-2 bg-white/5 w-full flex justify-center items-center gap-2 text-sm ">
            <MdVideoLibrary />
            <span>{data.videos.total} VIDEOS</span>
          </div>
          <div className="photo py-2 bg-white/5 w-full flex justify-center items-center gap-2 text-sm">
            <MdPhotoLibrary />
            <span>{data.images.total} PHOTOS</span>
          </div>
        </div>
        <div className="info flex p-3 gap-x-3  items-center ">
          <div className="image relative " >
            <Image className='w-96' src={thumbnail} width={90} height={100} alt='image'></Image>
            <FaPlus size={20} className='absolute top-1 left-2' />
          </div>

          <div className="about space-y-2 ">
            <div className="gener flex gap-x-2 overflow-auto hide-scrollbar">
              {data.genres?.genres.map((gener) => {
                return <Gener key={gener.id} gener={gener.text} />
              })}
            </div>
            <div className="desc text-xs ">
              {data.plot?.plotText?.plainText}
            </div>
          </div>
        </div>
        <div className="ratings flex gap-5 p-3 ">
          <div className="rating flex items-center gap-1">
            <FaStar fill='yellow' />
            7.9  <span className='text-sm text-white/50'>/ 10</span>
            <span className='text-sm text-white/50 ml-1'>{data.meterRanking?.currentRank}</span>
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
            <div className='font-bold'>{data.reviews?.total}</div>
            <div className='text-sm'>User riviews</div>
          </div>
          <div className="critic text-center text-blue-600">
            <div className='font-bold'>{data.criticReviewsTotal?.total}</div>
            <div className='text-sm'>Critic riviews</div>
          </div>
          <div className="meta text-center text-blue-600">
            <div className='font-bold bg-green-700 text-white inline px-[3px]'>{data.metacritic?.metascore?.score}</div>
            <div className='text-sm'>Metascore</div>
          </div>
        </div>
      </section >

      <section className="bg-gradient-to-b from-[#1b1918] to-[#1b1b1b] text-white py-8  hidden md:block">
        <div className="container mx-auto lg:w-[90vw] space-y-5">
          <div className="row flex justify-between">
            <div className="desc px-4 space-y-1 py-2 ">
              <h1 className='text-[3rem] '>{data.originalTitleText?.text}</h1>
              <div className="flex items-center text-base text-[#b5b4b4]">
                <span>{data.releaseYear.year}</span> <LuDot size={23} color="#ffffffd4" /> <span>{data.certificate?.rating}</span> <LuDot size={23} color="#ffffffd4" /> <span>{formatDuration(data.runtime?.seconds)}</span>
              </div>
            </div>
            <div className="ratings flex gap-5 p-3 text-2xl">
              <div className="text-lg text-gray-300  text-center">
                <div> IMDB RATING </div>
                <div className="rating flex items-center justify-center gap-1 cursor-pointer py-1 px-2 rounded-md hover:bg-white/10">
                  <FaStar fill='yellow' />
                  7.9  <span className='text-base text-white/50'>/ 10</span>
                  <span className='text-sm text-white/50 ml-1'>{data.meterRanking?.currentRank}</span>
                </div>
              </div>
              <div className="text-lg text-gray-300  text-center">
                <div className="">YOUR RATING</div>
                <div className="rate flex items-center justify-center gap-1 text-blue-500 font-semibold cursor-pointer py-1 rounded-md hover:bg-white/10 ">
                  <FaRegStar />
                  <span>Rate</span>
                </div>
              </div>
              <div className="text-lg text-gray-300  text-center">
                <div className="">POPULARITY</div>
                <div className="rank flex items-center justify-center gap-1 cursor-pointer py-1 px-2 rounded-md hover:bg-white/10">
                  <AiOutlineStock className='text-green-600 ' size={20} /><span>602</span>
                  <LuDot size={23} color="#ffffffd4" /><span className='text-base text-white/50'>43</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex  gap-1 w-full h-[70vh]">
            <div className="image relative w-1/4 h-full" >
              <Image className='w-full h-full' src={thumbnail} width={90} priority={true} height={100} alt='image'></Image>
              <FaPlus size={20} className='absolute top-1 left-2' />
            </div>
            <div className="banner relative w-4/6 ">
              <Image className='w-full h-full' priority={true} src={data.primaryVideos.edges[0]?.node?.thumbnail?.url} height={40} width={100} alt="spiderman banner"></Image>
              <div className="content absolute w-full h-full top-0 bg-gradient-to-b from-transparent from-70% to-black flex items-end">
                <span className='opacity-80 p-2 tracking-wide'>Play trailer 2:30 </span>
              </div>
            </div>
            <div className="photo-video flex justify-center flex-col gap-1 w-1/6">
              <div className="video bg-white/5 w-full h-full flex justify-center items-center flex-col gap-2 text-xl cursor-pointer hover:bg-white/10 ">
                <MdVideoLibrary />
                <span>{data.videos?.total} VIDEOS</span>
              </div>
              <div className="photo bg-white/5 w-full h-full flex justify-center items-center gap-2 flex-col text-xl cursor-pointer hover:bg-white/10 ">
                <MdPhotoLibrary />
                <span>{data.images?.total} PHOTOS</span>
              </div>
            </div>
          </div>
          <div className="row flex  ">
            <div className="left w-2/3 space-y-3">
              <div className="gener flex gap-x-2 overflow-auto hide-scrollbar">
                {data.genres?.genres.map((gener) => {
                  return <Gener key={gener.id} gener={gener.text} />
                })}
              </div>
              <div className="desc ">
                {data.plot.plotText.plainText}
              </div>
              <div className="about space-y-2">
                <Line size={"100%"} />
                <CrewList type={"Director"} list={data.directors[0]?.credits} />
                <Line size={"100%"} />
                <CrewList type={"Writers"} list={data.writers[0]?.credits} />
                <Line size={"100%"} />
                <CrewList type={"All cast & crew"} size={"100%"} />
                <Line size={"100%"} />
              </div>
            </div>
            <div className="right w-1/3 space-y-3">
              <div className="button px-5 ">
                <button className=' outline-none flex items-center justify-between bg-yellow-500 text-black w-full px-3 py-2 rounded-md'>
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
                  <div className='font-bold'>{data.reviews?.total}</div>
                  <div className='text-sm'>User riviews</div>
                </div>
                <div className="critic text-center text-blue-600">
                  <div className='font-bold'>{data.criticReviewsTotal?.total}</div>
                  <div className='text-sm'>Critic riviews</div>
                </div>
                <div className="meta text-center text-blue-600">
                  <div className='font-bold bg-green-700 text-white inline px-[3px]'>{data.metacritic?.metascore?.score}</div>
                  <div className='text-sm'>Metascore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container lg:w-[75vw] mx-auto">

        <AwardSection wins={data.wins?.total} nomination={data.nominations?.total} award={data.prestigiousAwardSummary?.award?.text} awardCount={data.prestigiousAwardSummary?.nominations} />

        <MediaSection photos={data.titleMainImages?.edges} />

        <CrewSection casts={data.cast?.edges} directors={data.directors[0]?.credits} writers={data.writers[0]?.credits} />

        <SuggestionSection moreTitles={data.moreLikeThisTitles?.edges} type={"More like this"} />

        <section className="details space-y-2 my-3 bg-gray-100">
          <TagHeading type={"Deatails"} />
          <Line color={"gray-400"} />
          <div className="px-4 space-x-3 py-2">
            <span className="md:text-lg"><strong>{"Release Date"}</strong></span>
            <span className='text-blue-600 capitalize text-sm md:text-base'>
              {`${data.releaseDate.day} / ${data.releaseDate.month} / ${data.releaseDate.year}`}
            </span>
          </div>
          <Line color={"gray-400"} />
          <div className="px-4 space-x-3 py-2">
            <span className="md:text-lg"><strong>{"Country of origin"}</strong></span>
            <span className='text-blue-600 capitalize text-sm md:text-base'>
              {data.releaseDate?.country?.text}
            </span>
          </div>
          <Line color={"gray-400"} />
          <div className="px-4 md:flex gap-x-4 items-center">
            <span className='md:text-lg'><strong>{"Languages"}</strong></span>
            <div className="lists ">
              {data.spokenLanguages?.spokenLanguages.map((language, key) => {
                return (
                  <div key={language.id} className='inline-flex items-center text-blue-500 capitalize text-sm  md:text-base'>
                    {language.text} {(key !== (data.spokenLanguages?.spokenLanguages.length - 1)) && <LuDot size={23} color="blue" />}
                  </div>
                )
              })}
            </div>
          </div>
          <Line color={"gray-400"} />
          <div className="px-4 space-x-3 py-2">
            <span className="md:text-lg"><strong>{'Also known as'}</strong></span>
            <span className='text-blue-600 capitalize text-sm md:text-base'>
              {data.akas?.edges[0]?.node?.text}
            </span>
          </div>
          <Line color={"gray-400"} />
          <div className="px-4 space-x-3 py-2 md:flex  items-center">
            <span className="md:text-lg"><strong>{'Filming locations'}</strong></span>
            <div className='text-blue-600 capitalize text-sm md:text-base'>
              {data.filmingLocations?.edges[0]?.node?.location}
            </div>
          </div>
        </section>

        <section className="collection space-y-2 bg-gray-100  my-3">
          <TagHeading type={"Box office"} />
          <Budget type={"Budget"} price={data.productionBudget?.budget?.amount} currency={data.productionBudget?.budget?.currency} />
          <Budget type={"Lifetime Gross "} price={data.lifetimeGross?.total?.amount} currency={data.lifetimeGross?.total?.currency} />
          <Budget type={"Worldwide Gross"} price={data.worldwideGross?.total?.amount} currency={data.worldwideGross?.total?.currency} />
        </section>

        <section className="did-you-know bg-gray-100">
          <TagHeading type={"Did you know"} />
          <div className="cantainer p-4 space-y-3">
            <TextCard title={"Trivia"} desc={data.trivia?.edges[0] ? data.trivia.edges[0].node.text.plaidHtml : ""} />
            <TextCard title={"Goofs"} desc={data.goofs?.edges[0] ? data.goofs.edges[0].node.text.plaidHtml : ""} />
            <TextCard title={"Quotes"} desc={data.quotes?.edges[0] ? data.quotes.edges[0].node.lines[0].text : ""} />
            <TextCard title={"Crazy credits"} desc={data.crazyCredits?.edges[0] ? data.crazyCredits.edges[0].node.text.plaidHtml : ""} />
            <TextCard title={"Alternative versions"} desc={data.alternateVersions?.edges[0] ? data.alternateVersions.edges[0].node.text.plaidHtml : ""} />
            <TextCard title={"Connections"} desc={data.connections?.edges[0] ? data.connections.edges[0].node.associatedTitle.titleText.text : ""} />
          </div>
        </section>

      </section>
    </>
  )
}

