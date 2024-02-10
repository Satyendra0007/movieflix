import TagHeading from "./TagHeading"
import TextCard from "./TextCard"


export default function DidYouKnowSections() {
  return (
    <section className="did-you-kn bg-gray-100">
      <TagHeading type={"Did you know"} />
      <div className="cantainer p-4 space-y-3">
        <TextCard title={"Trivia"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, molestias delectus? Dicta quae amet cumque aliquam dolores veritatis commodi sapiente, qui aperiam facilis nemo explicabo, assumenda doloremque ad nisi tempora voluptas deserunt ullam accusamus!"} />
        <TextCard title={"Groof"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, molestias delectus? Dicta quae amet cumque aliquam dolores veritatis commodi sapiente, qui aperiam facilis nemo explicabo, assumenda doloremque ad nisi tempora voluptas deserunt ullam accusamus!"} />
        <TextCard title={"Quotes"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, molestias delectus? Dicta quae amet cumque aliquam dolores veritatis commodi sapiente, qui aperiam facilis nemo explicabo, assumenda doloremque ad nisi tempora voluptas deserunt ullam accusamus!"} />
        <TextCard title={"Crazy creadits"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, molestias delectus? Dicta quae amet cumque aliquam dolores veritatis commodi sapiente, qui aperiam facilis nemo explicabo, assumenda doloremque ad nisi tempora voluptas deserunt ullam accusamus!"} />
      </div>
    </section>
  )
}
