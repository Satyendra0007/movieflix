import TagHeading from "./TagHeading"
import Video from "./Video"
import Photo from "./Photo"

export default function MediaSection({ photos = [], videos = [] }) {
  return (
    <section className='media space-y-3 py-2'>
      <div className="video bg-gray-100">
        <TagHeading type={"Videos"} count={30} showArrow={true} />
        <div className=" flex overflow-auto gap-3 px-3 hide-scrollbar">

          {videos.map((video, index) => {
            return <Video key={index} src={video.node.thumbnail.url} duration={video.node.runtime.value} desc={video.node.primaryTitle.originalTitleText.text} type={video.node.contentType.displayName.value} />
          })}
        </div>
      </div>
      <div className="photo bg-gray-100">
        <TagHeading type={"Photos"} count={photos.length} showArrow={true} />
        <div className=" flex overflow-auto gap-3 px-3 hide-scrollbar">
          {photos.map((photo, index) => {
            return <Photo key={index} src={photo.node.url} />
          })}
        </div>
      </div>
    </section>
  )
}
