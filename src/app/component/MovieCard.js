import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function MovieCard({ elem }) {
  const router = useRouter();
  return (
    <>
      <div className="m-2 bg-gray-50 border border-gray-400 rounded-md shadow-full w-80 min-h-[35rem] md:w-64  md:min-h-[28rem]">
        <div className="image">
          <Image height={200} width={200} className="w-full h-80 md:h-48" src={elem.titlePosterImageModel.url} alt="Movie Thumbnail" />
        </div>
        <div className=" desc p-2 text-sm md:text-[.8rem] text-gray-800 space-y-1 min-h-56">
          <div className="font-bold text-red-500 text-lg">{elem.titleNameText}</div>
          <p className="">{elem.titlePosterImageModel.caption.slice(0, 50)}<span>...</span></p>
          <div className=""><strong>Credit :</strong><div>{elem.topCredits.map((element, key) => {
            return (element + (key < elem.topCredits.length - 1 ? " , " : ""))
          })}</div></div>
          <p className=""><strong>Release Year :</strong> {elem.titleReleaseText}</p>
          <p className=""><strong>Type :</strong> {elem.imageType}</p>
        </div>
        <div className="button p-2 button flex justify-center ">
          <button onClick={() => router.push(`/title/${elem.id}`)} className="outline-none py-2 px-8 bg-yellow-400 text-black font-semibold text-sm rounded-full hover:bg-yellow-300">View</button>
        </div>
      </div>
    </>
  )
}