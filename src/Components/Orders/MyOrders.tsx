import "./MyOrders.scss"

import React from "react"

type IMyOrdensProps = {}

const MyOrders = (props: IMyOrdensProps) => {
  return (
    <aside className="orders">
      <h3 className="orders__title">My orders</h3>
      <p className="orders__title--delivery">Delivery address</p>
    </aside>
  )
}

export default MyOrders
