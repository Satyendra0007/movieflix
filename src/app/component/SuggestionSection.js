import TagHeading from "./TagHeading"
import Suggestion from "./Suggestion"


export default function SuggestionSection({ moreTitles = [] }) {
  return (
    <section className="more bg-gray-100 my-3">
      <TagHeading type={"More Like this"} />
      <div className=" hide-scrollbar flex overflow-auto gap-3 px-3 ">
        {moreTitles.map(title => {
          return <Suggestion key={title.node.id} src={title.node.primaryImage.url} rating={title.node.ratingsSummary.aggregateRating} title={title.node.titleText.text} />
        })}
      </div>
    </section>
  )
}
