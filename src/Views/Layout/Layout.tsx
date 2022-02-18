import React from "react"

import Banner from "../../Components/Banner/Banner"
import Navbar from "../../Components/Navbar/Navbar"
import MyOrders from "../../Components/Orders/MyOrders"
import SearchBar from "../../Components/SearchBar/SearchBar"

type Props = {}

const Layout = (props: Props) => {
  return (
    <main>
      <Navbar />
      <SearchBar />
      <Banner />
      <MyOrders />
    </main>
  )
}

export default Layout
