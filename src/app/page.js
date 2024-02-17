'use client'
import Logo from "./component/Logo"
import Link from "next/link"
import { IoSearch } from "react-icons/io5";
import searchContext from "./context/SeachContext";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { setSearch } = useContext(searchContext);
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value)
  }

  const handleOnclick = () => {
    setSearch(input);
    router.push('/explore')
  }

  return (
    <>
      <div className="container mx-auto h-[55vh] ">
        <div className="content h-full w-full flex flex-col justify-center items-center gap-4 ">

          <div className="logo mx-auto">
            <div className="logo ">
              <Link className="font-extrabold text-yellow-500 p-[6px] rounded-md text-3xl" href="/">MovieFlix</Link>
            </div>
          </div>

          <div className="input flex justify-between items-center gap-2 relative md:w-[50%] ">
            <input type="text" placeholder="IMDb Search " className="outline-none w-full p-3 rounded-full ring-2 ring-yellow-500 " value={input} onChange={handleOnChange} />
            <button className="outline-none bg-yellow-500 p-3.5 text-white font-semibold rounded-full absolute right-0 top-0" onClick={handleOnclick}><IoSearch size={20} /></button>
          </div>
        </div>
      </div>
    </>
  )
}

