import "./OrdersWrapper.scss"

import React from "react"

import MyOrders from "../../Components/Orders/MyOrders"

type Props = {}

const OrdersWrapper = (props: Props) => {
  return (
    <div className="col-2">
      <MyOrders />
    </div>
  )
}

export default OrdersWrapper
