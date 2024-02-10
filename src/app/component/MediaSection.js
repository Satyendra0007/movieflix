import TagHeading from "./TagHeading"
import Video from "./Video"
import Photo from "./Photo"

export default function MediaSection({ photos = [], videos = [] }) {
  return (
    <section className='media space-y-3 py-2'>
      <div className="video bg-gray-100">
        <TagHeading type={"Videos"} count={30} showArrow={true} />
        <div className=" flex overflow-auto gap-3 px-3 hide-scrollbar">
          <Video src={"https://i0.wp.com/vrscout.com/wp-content/uploads/2022/10/IronManVRQuest2_2.jpg?ssl=1"} duration={2.40} desc={"iron man tony starc"} />
          <Video src={"https://i0.wp.com/vrscout.com/wp-content/uploads/2022/10/IronManVRQuest2_2.jpg?ssl=1"} duration={2.40} desc={"iron man tony starc bashdd jashjjf jhfsdj"} />
          <Video src={"https://i0.wp.com/vrscout.com/wp-content/uploads/2022/10/IronManVRQuest2_2.jpg?ssl=1"} duration={2.40} desc={"iron man tony starc bashdd jashjjf jhfsdj"} />
          <Video src={"https://i0.wp.com/vrscout.com/wp-content/uploads/2022/10/IronManVRQuest2_2.jpg?ssl=1"} duration={2.40} desc={"iron man tony starc bashdd jashjjf jhfsdj"} />
          <Video src={"https://i0.wp.com/vrscout.com/wp-content/uploads/2022/10/IronManVRQuest2_2.jpg?ssl=1"} duration={2.40} desc={"iron man tony starc bashdd jashjjf jhfsdj"} />
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
