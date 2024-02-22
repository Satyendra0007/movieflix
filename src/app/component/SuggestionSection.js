'use client'
import TagHeading from "./TagHeading"
import Suggestion from "./Suggestion"
import PreviousCard from "./PreviousCard"
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";


export default function SuggestionSection({ moreTitles = [], people, type }) {

  const slider = useRef();
  const prevBtn = useRef();
  const nextBtn = useRef();
  const slide = useRef(0);
  const [clicked, setClicked] = useState(true);

  const handleNext = () => {
    slider.current.style.transform = `translateX(-${(--slide.current) * 100}%)`
    setClicked(!clicked)
  }

  const handlePrev = () => {
    slider.current.style.transform = `translateX(-${(++slide.current) * 100}%)`
    setClicked(!clicked)
  }

  useEffect(() => {
    if (slide.current < moreTitles.length / 8 - 1) {
      prevBtn.current.style.display = "block"
    } else {
      prevBtn.current.style.display = "none"
    }

    if (slide.current > 0) {
      nextBtn.current.style.display = "block"
    }
    else {
      nextBtn.current.style.display = "none"
    }
  }, [clicked])


  return (
    <section className="more bg-gray-100 my-3">
      <TagHeading type={type} />
      <div className=" overflow-auto md:overflow-hidden md:relative ">
        <div ref={prevBtn} className="hidden md:block absolute left-0 top-[38%] z-10"><button onClick={handlePrev} className="p-2 bg-gray-300 text-3xl hover:text-yellow-500 "><GrFormPrevious /></button></div>
        <div ref={nextBtn} className="hidden md:block absolute right-0 top-[38%] z-10"><button onClick={handleNext} className="p-2 bg-gray-300 text-3xl hover:text-yellow-500"><MdNavigateNext /></button></div>
        <div ref={slider} className=" flex gap-3 px-3 hide-scrollbar transition-all duration-500 ease-in-out ">
          {moreTitles.map((title, index) => {
            return people ? <div key={index} className="w-fit flex justify-between flex-shrink-0"> <PreviousCard title={title.node.title} size="18rem" /></div> : <Suggestion key={title.node.id} src={title.node.primaryImage.url} rating={title.node.ratingsSummary.aggregateRating} title={title.node.titleText.text} />
          })}
        </div>
      </div>
    </section>
  )
}
