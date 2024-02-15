import React from 'react'
import TagHeading from './TagHeading'
import Cast from './Cast'
import Line from './Line'
import CrewList from './CrewList'

export default function CrewSection({ casts = [], directors = [], writers = [] }) {
  const altImage = "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png";

  return (
    <section className="crew-cast py-2 space-y-3 bg-gray-100">
      <TagHeading type={"Top Casts"} showArrow={true} />
      <div className=" flex overflow-auto gap-3 px-3 hide-scrollbar">
        {casts.map((cast) => {
          return <Cast key={cast.node.name.id} src={cast.node.name.primaryImage ? cast.node.name.primaryImage.url : altImage} name={cast.node.name.nameText.text} charecter={cast.node.characters[0].name} />
        })}

      </div>
      <Line color={"gray-400"} size={"90%"} />
      <CrewList type={"Director"} list={directors} />
      <Line color={"gray-400"} size={"90%"} />
      <CrewList type={"Writers"} list={writers} />
      <Line color={"gray-400"} size={"90%"} />
      <CrewList type={"All cast & crew"} />
      <Line color={"gray-400"} size={"90%"} />
    </section>
  )
}
