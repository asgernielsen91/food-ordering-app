import "./Navbar.scss"

import { Link, RouteComponentProps, navigate } from "@reach/router"
import React from "react"

import home from "../../Assets/home.svg"
import liked from "../../Assets/liked.svg"
import profile from "../../Assets/profile.svg"

type INavbarProps = {
  to: string
  children: React.ReactNode
}

const NavLink = (props: INavbarProps) => (
  <Link
    {...props}
    getProps={(getProps) => {
      return {
        className: getProps.isCurrent ? "active-link" : "not-active-link",
      }
    }}
  />
)

const Navbar = (props: RouteComponentProps) => {
  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <span className="navbar__menu--line"></span>
      </div>
      <div className="navbar__links">
        <li>
          <NavLink to="/home">
            <img src={home} className="navbar__links--icons" alt="Home svg" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/liked">
            <img src={liked} className="navbar__links--icons" alt="Heart svg" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <img src={profile} className="navbar__links--icons" alt="Profile svg" />
          </NavLink>
        </li>
      </div>
    </nav>
  )
}

export default Navbar
