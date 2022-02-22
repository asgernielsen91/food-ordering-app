import "./FilterCategories.scss"

import React from "react"

type FilterCategoriesProps = {}

const FilterCategories = (props: FilterCategoriesProps) => {
  const categoriesArr = [
    { name: "All" },
    { name: "Top Rated" },
    { name: "Burger" },
    { name: "Pizza" },
    { name: "Pasta" },
    { name: "Healthy" },
    { name: "Thai" },
  ]

  return (
    <div className="categories">
      <ul>
        <li>
          {categoriesArr.map((el, index) => {
            return (
              <a href="" className="categories__titles" key={index}>
                {el.name}
              </a>
            )
          })}
        </li>
      </ul>
    </div>
  )
}

export default FilterCategories
