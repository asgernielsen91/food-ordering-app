import "./ContentContainer.scss"

import React from "react"

import ContentWrapper from "./ContentWrapper"
import OrdersWrapper from "./OrdersWrapper"

type Props = {}

const ContentContainer = (props: Props) => {
  return (
    <div className="container">
      <ContentWrapper />
      <OrdersWrapper />
    </div>
  )
}

export default ContentContainer
