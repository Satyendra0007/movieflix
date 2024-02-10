import { MdLocalMovies, MdVideoLibrary } from "react-icons/md";
import { BsTv } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";
import { FaGlobeAfrica } from "react-icons/fa";

const navData = [
  {
    name: "Movie",
    icon: <MdLocalMovies />
  },
  {
    name: "Tv Show ",
    icon: <BsTv />
  },
  {
    name: "Watch",
    icon: <MdVideoLibrary />
  },
  {
    name: "Celebs",
    icon: <IoMdPeople />
  },
  {
    name: "Community",
    icon: <FaGlobeAfrica />
  }

]

export default navData;