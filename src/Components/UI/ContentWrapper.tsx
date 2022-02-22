import "./ContentWrapper.scss"

import React from "react"

import Banner from "../../Components/Banner/Banner"
import SearchBar from "../../Components/SearchBar/SearchBar"
import FilterCategories from "../FilterCategories/FilterCategories"

type Props = {}

const ContentWrapper = (props: Props) => {
  return (
    <div className="col-1">
      <SearchBar />
      <Banner />
      <FilterCategories />
    </div>
  )
}

export default ContentWrapper
