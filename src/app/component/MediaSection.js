'use client'
import TagHeading from "./TagHeading"
import Video from "./Video"
import Photo from "./Photo"
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";

export default function MediaSection({ photos = [], videos = [] }) {

  const vSlider = useRef();
  const prevBtnV = useRef();
  const nextBtnV = useRef();
  const pSlider = useRef();
  const prevBtnP = useRef();
  const nextBtnP = useRef();
  const pSlide = useRef(0);
  const vSlide = useRef(0)
  const [clicked, setClicked] = useState(true);

  const handleNext = (elem, counter) => {
    elem.current.style.transform = `translateX(-${(--counter.current) * 100}%)`
    setClicked(!clicked)
  }

  const handlePrev = (elem, counter) => {
    elem.current.style.transform = `translateX(-${(++counter.current) * 100}%)`
    setClicked(!clicked)
  }

  const toogleButtons = (typeArray, counter, prevBtn, nextBtn) => {
    if (counter.current < (typeArray.length / 5) - 1) {
      prevBtn.current.style.display = "block"
    } else {
      prevBtn.current.style.display = "none"
    }

    if (counter.current > 0) {
      nextBtn.current.style.display = "block"
    }
    else {
      nextBtn.current.style.display = "none"
    }
  }

  useEffect(() => {
    toogleButtons(photos, pSlide, prevBtnP, nextBtnP);
    if (videos.length !== 0)
      toogleButtons(videos, vSlide, prevBtnV, nextBtnV);
  }, [clicked])

  // useEffect(() => {
  //   toogleButtons(vSlide);
  // }, [clicked])

  return (
    <section className='media space-y-3 py-2'>
      {videos.length !== 0 && <div className="video bg-gray-100">
        <TagHeading type={"Videos"} count={videos.length} showArrow={true} />
        <div className=" overflow-auto md:overflow-hidden md:relative ">
          <div ref={prevBtnV} className="hidden md:block absolute left-0 top-[38%] z-10"><button onClick={() => handlePrev(vSlider, vSlide)} className="p-2 bg-gray-300 text-3xl hover:text-yellow-500 "><GrFormPrevious /></button></div>
          <div ref={nextBtnV} className="hidden md:block absolute right-0 top-[30%] z-10"><button onClick={() => handleNext(vSlider, vSlide)} className="p-2 bg-gray-300 text-3xl hover:text-yellow-500"><MdNavigateNext /></button></div>
          <div ref={vSlider} className=" flex gap-3 px-3 hide-scrollbar transition-all duration-500 ease-in-out ">
            {videos.map((video, index) => {
              return <Video key={index} src={video.node.thumbnail.url} duration={video.node.runtime.value} desc={video.node.primaryTitle.originalTitleText.text} type={video.node.contentType.displayName.value} />
            })}
          </div>
        </div>
      </div>}

      <div className="photo bg-gray-100 ">
        <TagHeading type={"Photos"} count={photos.length} showArrow={true} />
        <div className=" overflow-auto md:overflow-hidden md:relative ">
          <div ref={prevBtnP} className="hidden md:block absolute left-0 top-[38%] z-10"><button onClick={() => handlePrev(pSlider, pSlide)} className="p-2 bg-gray-300 text-3xl hover:text-yellow-500 "><GrFormPrevious /></button></div>
          <div ref={nextBtnP} className="hidden md:block absolute right-0 top-[38%] z-10"><button onClick={() => handleNext(pSlider, pSlide)} className="p-2 bg-gray-300 text-3xl hover:text-yellow-500"><MdNavigateNext /></button></div>
          <div ref={pSlider} className=" flex gap-3 px-3 hide-scrollbar transition-all duration-500 ease-in-out ">
            {photos.map((photo, index) => {
              return <Photo key={index} src={photo.node.url} />
            })}
          </div>
        </div>
      </div>
    </section >
  )
}
