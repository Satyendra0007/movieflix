'use client'
import { useEffect, useState, useContext } from "react";
import MovieCard from "../component/MovieCard";
import result from "@/app/data/data.js"
import api from "../data/api";
import searchContext from "../context/SeachContext";
import TagHeading from "../component/TagHeading";
import PeopleCard from "../component/PeopleCard";



export default function Explore() {
  const { search } = useContext(searchContext);
  const [titleData, setTitleData] = useState([]);
  const [peopleData, setPeopleData] = useState([]);

  const url = `https://imdb146.p.rapidapi.com/v1/find/?query=${search}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
    }
  };

  const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const results = await response.json();
    setTitleData(results.titleResults.results)
    setPeopleData(result.nameResults.results)
  }

  useEffect(() => {
    // fetchData(url, options);
    (() => {
      setTitleData(api.titleResults.results)
      setPeopleData(api.nameResults.results)
    })();
  }, [titleData, peopleData]);

  return (
    <section className=" py-10">
      <div className="container mx-auto lg:w-[90vw] space-y-4">
        <h1 className="text-center text-2xl font-semibold">Results for / <span className="text-red-500 font-normal capitalize">{search}</span></h1>
        <div className="">
          <TagHeading type={"Title"} />
          <div className="flex flex-wrap items-center justify-center">
            {titleData.map((elem, key) => {
              return <MovieCard key={key} elem={elem} />
            })}
          </div>
        </div>
        <div className="h-[1px] bg-gray-400 w-full "></div>
        <div className=" space-y-3">
          <TagHeading type={"People"} />
          <div className="flex flex-wrap items-center gap-5 justify-center">
            {peopleData.map((elem, key) => {
              return <PeopleCard key={key} elem={elem} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
