import "./Banner.scss"

import React from "react"

import bannerimage from "../../Assets/banner-image.jpg"

type IBannerProps = {}

const Banner = (props: IBannerProps) => {
  return (
    <main className="container">
      <div className="flex-parent">
        <div className="flex-child-1">
          <div className="banner">
            <div className="banner__text">
              <p>
                50 % Off <br />
                <span> Healthy food</span>
              </p>
            </div>
            <img className="banner__image" src={bannerimage} alt="Food" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Banner
