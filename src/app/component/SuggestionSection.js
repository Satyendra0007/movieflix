import TagHeading from "./TagHeading"
import Suggestion from "./Suggestion"
import PreviousCard from "./PreviousCard"


export default function SuggestionSection({ moreTitles = [], people, type }) {
  return (
    <section className="more bg-gray-100 my-3">
      <TagHeading type={type} />
      <div className=" hide-scrollbar flex overflow-auto gap-3 px-3 ">
        {moreTitles.map((title, index) => {
          return people ? <div key={index} className="w-fit flex justify-between flex-shrink-0"> <PreviousCard title={title.node.title} /></div> : <Suggestion key={title.node.id} src={title.node.primaryImage.url} rating={title.node.ratingsSummary.aggregateRating} title={title.node.titleText.text} />
        })}
      </div>
    </section>
  )
}
