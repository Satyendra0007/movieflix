import Image from "next/image"
import Link from "next/link"
export default function MovieCard({ elem }) {
  return (
    <>
      <div className="m-2 rounded-md border border-neutral-900 shadow-full bg-white w-80 md:w-64 md:h-[27rem]">
        <div className="image">
          <Image height={200} width={200} className="w-full h-80 md:h-48" src={elem.titlePosterImageModel.url} alt="Movie Thumbnail" />
        </div>
        <div className=" desc p-2 text-sm md:text-[.8rem] text-gray-800 space-y-1">
          <div className="font-bold text-red-500 text-lg">{elem.titleNameText}</div>
          <p className="">{elem.titlePosterImageModel.caption.slice(0, 50)}<span>...</span></p>
          <div className=""><strong>Credit :</strong><div>{elem.topCredits.map((element, key) => {
            return (element + (key < elem.topCredits.length - 1 ? " , " : ""))
          })}</div></div>
          <p className=""><strong>Release Year :</strong> {elem.titleReleaseText}</p>
          <p className=""><strong>Type :</strong> {elem.imageType}</p>
        </div>
        <div className="button p-2 flex justify-end ">
          <Link href="/title/fgggyg">
            <button className="outline-none py-3 px-5 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-800">View</button>
          </Link>
        </div>
      </div>
    </>
  )
}