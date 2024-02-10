import TagHeading from "./TagHeading"
import Line from "./Line"
import List from "./CrewList"

export default function DetailsSection() {
  return (
    <section className="details space-y-2 my-3 bg-gray-100">
      <TagHeading type={"Deatails"} />
      <Line color={"gray-400"} />
      <List type={"Release date"} list={["aman kumar"]} />
      <Line color={"gray-400"} />
      <List type={"Country of origin"} list={["aman kumar"]} />
      <Line color={"gray-400"} />
      <List type={"Language"} list={["aman kumar"]} />
      <Line color={"gray-400"} />
      <List type={"Filming Location"} list={["aman kumar"]} />
      <Line color={"gray-400"} />
      <List type={"Production company"} list={["aman kumar"]} />
      <Line color={"gray-400"} />

    </section>
  )
}
