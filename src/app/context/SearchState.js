'use client'
import { useState } from "react";
import SearchContext from "./SeachContext";
// import { useContext } from "react";

export default function SearchState(props) {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {props.children}
    </SearchContext.Provider>
  )
}


