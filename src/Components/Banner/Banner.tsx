import "./Banner.scss"

import React from "react"

import bannerimage from "../../Assets/banner-image.jpg"

type IBannerProps = {}

const Banner = (props: IBannerProps) => {
  return (
    <div className="banner">
      <div className="banner__text">
        <p>
          50 % Off <br />
          <span> Healthy food</span>
        </p>
      </div>
      <img className="banner__image" src={bannerimage} alt="Food" />
    </div>
  )
}

export default Banner
