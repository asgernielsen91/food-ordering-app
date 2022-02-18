import "./SearchBar.scss"

import React from "react"

type ISearchBarProps = {}

const SearchBar = (props: ISearchBarProps) => {
  return (
    <div className="searchbar">
      <input className="searchbar__input" type="text" placeholder="What would you like to eat?" />
    </div>
  )
}

export default SearchBar
