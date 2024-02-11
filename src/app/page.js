'use client'
import Logo from "./component/Logo"
import Link from "next/link"
import { IoSearch } from "react-icons/io5";
import searchContext from "./context/SeachContext";
import { useContext, useState } from "react";

export default function Home() {
  const { setSearch } = useContext(searchContext);

  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value)
  }


  return (
    <>
      <div className="container mx-auto h-[55vh] ">
        <div className="content h-full w-full flex flex-col justify-center items-center gap-4 ">
          <div className="logo mx-auto"><Logo size={"2rem"} /></div>
          <div className="input flex justify-between items-center gap-2 relative ">
            <input type="text" placeholder="Enter the text" className="outline-none w-full h-10 p-3 rounded-full ring-2 ring-yellow-500 " value={input} onChange={handleOnChange} />
            <Link href="/explore">
              <button className="outline-none bg-yellow-500 p-3 text-white font-semibold rounded-full absolute right-1 -top-[2px]" onClick={() => setSearch(input)}><IoSearch size={20} /></button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

