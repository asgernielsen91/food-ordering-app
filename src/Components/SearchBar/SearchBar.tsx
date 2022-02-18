import "./SearchBar.scss"

import React from "react"

type ISearchBarProps = {}

const SearchBar = (props: ISearchBarProps) => {
  return (
    <main className="container">
      <div className="flex-parent">
        <div className="flex-child-1">
          <div className="searchbar">
            <input className="searchbar__input" type="text" placeholder="What would you like to eat?" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchBar
