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
import people from '@/app/data/nameDetails'
import searchContext from '@/app/context/SeachContext';
import { useContext } from 'react';
import AwardSection from '@/app/component/AwardSection';
import MediaSection from '@/app/component/MediaSection';
import CrewSection from '@/app/component/CrewSection';
import SuggestionSection from '@/app/component/SuggestionSection';
import CrewList from "@/app/component/CrewList";
import PeopleCreditSection from '@/app/component/PeopleCreditSection';
import TextCard from '@/app/component/TextCard';

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
      <section className=" py-5 container mx-auto bg-gradient-to-b from-zinc-800 to-neutral-900 text-white md:hidden " >
        <div className="desc px-4 space-y-1 py-2 ">
          <h1 className='text-2xl '>{people.nameText.text}</h1>
          <div className="flex items-center text-sm text-[#b5b4b4]">
            {people.primaryProfessions.map((ele, key) => {
              return (
                <span key={ele.category.id} className='flex items-center'>
                  <span> {ele.category.text}</span> {(key !== (people.primaryProfessions.length - 1)) && <LuDot size={23} color="#ffffffd4" />}
                </span>
              )
            })}
          </div>
        </div>
        <div className="banner relative ">
          <Image className='w-full' priority={true} src={people.primaryImage.url} height={40} width={100} alt="spiderman banner"></Image>
          <div className="content absolute w-full h-full top-0 bg-gradient-to-b from-transparent from-70% to-black flex items-end">
            <span className='opacity-80 p-2 tracking-wide'>Play trailer 2:30 </span>
          </div>
        </div>
        <div className="photo-video flex justify-center gap-1">
          <div className="video py-2 bg-white/5 w-full flex justify-center items-center gap-2 text-sm ">
            <MdVideoLibrary />
            <span>{people.videos.total} VIDEOS</span>
          </div>
          <div className="photo py-2 bg-white/5 w-full flex justify-center items-center gap-2 text-sm">
            <MdPhotoLibrary />
            <span>{people.images.total} PHOTOS</span>
          </div>
        </div>
        <div className="info flex p-3 gap-x-3  items-center ">
          <div className="image relative " >
            <Image className='w-96' src={people.primaryImage.url} width={90} height={100} alt='image'></Image>
            <FaPlus size={20} className='absolute top-1 left-2' />
          </div>

          <div className="about">
            <div className="desc text-xs ">
              {data.plot.plotText.plainText}
            </div>
            <div className=" space-x-3 py-2 text-sm">
              <span><strong>{"Born"}</strong></span>
              <span className=' capitalize '>
                {people.birthDate.displayableProperty.value.plainText}
              </span>
            </div>
          </div>
        </div>
        <div className="button px-5">
          <button className=' outline-none flex items-center justify-between bg-yellow-500 text-black w-full p-3 1 rounded-md'>
            <div className='text flex items-center gap-2'>
              <FaPlus />
              <div className='font-bold text-sm'>Add to list</div>
            </div>
            <div className="down"><FaChevronDown /></div>
          </button>
        </div>
      </section >

      <section className="bg-gradient-to-b from-zinc-800 to-neutral-900 text-white py-8  hidden md:block">
        <div className="container mx-auto lg:w-[90vw] space-y-5">
          <div className="row flex justify-between">
            <div className="desc px-4 space-y-1 py-2 ">
              <h1 className='text-[3rem] '>{people.nameText.text}</h1>
              <div className="flex items-center text-base text-[#b5b4b4]">
                {people.primaryProfessions.map((ele, key) => {
                  return (
                    <span key={ele.category.id} className='flex items-center'>
                      <span> {ele.category.text}</span> {(key !== (people.primaryProfessions.length - 1)) && <LuDot size={23} color="#ffffffd4" />}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="row flex  gap-1 w-full h-[70vh]">
            <div className="image relative w-1/4 h-full" >
              <Image className='w-full h-full' src={people.primaryImage.url} width={90} priority={true} height={100} alt='image'></Image>
              <FaPlus size={20} className='absolute top-1 left-2' />
            </div>
            <div className="banner relative w-4/6 ">
              <Image className='w-full h-full' priority={true} src={data.primaryVideos.edges[0].node.thumbnail.url} height={40} width={100} alt="spiderman banner"></Image>
              <div className="content absolute w-full h-full top-0 bg-gradient-to-b from-transparent from-70% to-black flex items-end">
                <span className='opacity-80 p-2 tracking-wide'>Play trailer 2:30 </span>
              </div>
            </div>
            <div className="photo-video flex justify-center flex-col gap-1 w-1/6">
              <div className="video bg-white/5 w-full h-full flex justify-center items-center flex-col gap-2 text-xl cursor-pointer hover:bg-white/10 ">
                <MdVideoLibrary />
                <span>{people.videos.total} VIDEOS</span>
              </div>
              <div className="photo bg-white/5 w-full h-full flex justify-center items-center gap-2 flex-col text-xl cursor-pointer hover:bg-white/10 ">
                <MdPhotoLibrary />
                <span>{people.images.total} PHOTOS</span>
              </div>
            </div>
          </div>
          <div className="row flex  ">
            <div className="left w-2/3 space-y-3">
              <div className="desc ">
                {data.plot.plotText.plainText}
              </div>
            </div>
            <div className="right w-1/3 space-y-3">
              <div className="px-4 space-x-3 py-2 text-xl">
                <span><strong>{"Born"}</strong></span>
                <span className=' capitalize '>
                  {people.birthDate.displayableProperty.value.plainText}
                </span>
              </div>
              <div className="button px-5">
                <button className=' outline-none flex items-center justify-between bg-yellow-500 text-black w-full p-3  rounded-md'>
                  <div className='text flex items-center gap-2'>
                    <FaPlus />
                    <div className='font-bold text-sm'>Add to list</div>
                  </div>
                  <div className="down"><FaChevronDown /></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container lg:w-[75vw] mx-auto">

        <AwardSection wins={people.wins.total} nomination={people.nominations.total} award={people.prestigiousAwardSummary.award.text} awardCount={data.prestigiousAwardSummary.nominations} winCount={people.prestigiousAwardSummary.wins} />

        <MediaSection photos={people.images.edges} videos={people.videos.edges} />

        <SuggestionSection moreTitles={people.knownForFeature.edges} people={true} type={"Known for"} />

        <PeopleCreditSection upcomingList={people.unreleasedPrimaryCredits} previousList={people.releasedPrimaryCredits} profession={people.primaryProfessions} />


        <section className="details space-y-2 my-3 bg-gray-100">
          <TagHeading type={"Personal deatails"} />
          <Line color={"gray-400"} />
          <div className="px-4 py-2 space-x-3">
            <span className='md:text-lg'><strong>{"Height"}</strong></span>
            <span className='text-blue-600 capitalize text-sm md:text-base '>
              {people.height.displayableProperty.value.plainText}
            </span>
          </div>
          <Line color={"gray-400"} />
          <div className="px-4 space-x-3 py-2">
            <span className='md:text-lg'><strong>{"Birthdate"}</strong></span>
            <span className='text-blue-600 capitalize text-sm md:text-base '>
              {people.birthDate.displayableProperty.value.plainText}
            </span>
          </div>
          <Line color={"gray-400"} />
          <div className="px-4 space-x-3 py-2">
            <span className='md:text-lg'><strong>{"Birth location"}</strong></span>
            <span className='text-blue-600 capitalize text-sm md:text-base '>
              {people.birthLocation.text}
            </span>
          </div>
          <Line color={"gray-400"} />
          <div className="px-4 space-x-3 py-2">
            <span className='md:text-lg'><strong>{"Parent"}</strong></span>
            <span className='text-blue-600 capitalize text-sm md:text-base '>
              {people.parents.edges[0].node.relationName.displayableProperty.value.plainText}
            </span>
          </div>
          <Line color={"gray-400"} />
          <div className="px-4 space-x-3 py-2">
            <span className='md:text-lg'><strong>{"Child"}</strong></span>
            <span className='text-blue-600 capitalize text-sm md:text-base '>
              {people.children.edges[0].node.relationName.displayableProperty.value.plainText}
            </span>
          </div>
          <Line color={"gray-400"} />
          <div className="px-4 py-2 md:flex items-center gap-3">
            <div className='md:text-lg'><strong>{"Other Works"}</strong></div>
            <div className='text-blue-600 capitalize text-sm md:text-base '>
              {people.otherWorks.edges.map((elem, index) => {
                return (
                  <div key={index}>{elem.node.text.plaidHtml}</div>
                )
              })}
            </div>
          </div>
          <Line color={"gray-400"} />
          <div className="px-4 py-2 md:flex items-center gap-3">
            <div className='md:text-lg'><strong>{"Publicity Listings"}</strong></div>
            <div className='text-blue-600 capitalize text-sm md:text-base '>
              {`${people.nameFilmBiography.total} Biographical Movies . 
                ${people.namePrintBiography.total} Print Biographies .
                ${people.namePortrayal.total} Portrayals .
                ${people.publicityInterview.total} Interviews .
                ${people.publicityArticle.total} Articles .
                ${people.publicityPictorial.total} Pictorials .
                ${people.publicityMagazineCover.total} Magzin Cover Photos .
              `}
            </div>
          </div>
        </section>

        <section className="did-you-know bg-gray-100">
          <TagHeading type={"Did you know"} />
          <div className="cantainer p-4 space-y-3">
            <TextCard title={"Trivia"} desc={people.trivia.edges[0].node.displayableArticle.body.plaidHtml} />
            <TextCard title={"Quetes"} desc={people.quotes.edges[0].node.displayableArticle.body.plaidHtml} />
            <TextCard title={"Trademarks"} desc={people.trademarks.edges[0].node.displayableArticle.body.plaidHtml} />
            <TextCard title={"Nicknames"} desc={people.nickNames[0].displayableProperty.value.plainText} />

            <TextCard title={"Salaries"} desc={people.titleSalaries.edges[0].node.displayableProperty.value.plainText} />
          </div>
        </section>

      </section >
    </>
  )
}

