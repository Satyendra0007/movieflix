'use client'
import { useEffect, useState, useContext } from "react";
import MovieCard from "../component/MovieCard";
import result from "@/app/data/data.js"
import searchContext from "../context/SeachContext";

export default function Explore() {
  const { search } = useContext(searchContext);

  const [data, setData] = useState([]);

  const url = `https://imdb146.p.rapidapi.com/v1/find/?query=${search}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd36623c860msh68f680d6ed06af2p1975acjsn2e690aed07e7',
      'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
    }
  };

  const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const results = await response.json();
    setData(results.titleResults.results)
  }

  useEffect(() => {
    // fetchData(url, options);
    // console.log(search)
    (() => { setData(result); })();
  }, [data]);

  return (
    <>
      <h1 className="text-center text-2xl py-4 font-semibold">Results for / <span className="text-red-500 font-normal capitalize">{search}</span></h1>
      <div className="flex flex-wrap items-center justify-center">
        {data.map((elem, key) => {
          return <MovieCard key={key} elem={elem} />
        })}
      </div>
    </>
  )
}
