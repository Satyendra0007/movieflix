import Logo from "./component/Logo"
import Link from "next/link"
export default function Home() {
  return (
    <>
      <div className="container h-[55vh] ">
        <div className="content h-full flex flex-col justify-center items-center gap-4">
          <div className="logo"><Logo size={"3rem"} /></div>
          <div className="input flex justify-between items-center gap-4 flex-col">
            <input type="text" placeholder="Enter the text" className="outline-none w-full h-10 p-3 rounded-xl ring ring-yellow-500" />
            <Link href="/explore">
              <button className="outline-none bg-yellow-500 px-4 py-2 font-semibold rounded-xl  " >Search</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

