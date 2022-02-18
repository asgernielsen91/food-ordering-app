import { Router } from "@reach/router"
import React from "react"

import Home from "./Views/Home/Home"
import Layout from "./Views/Layout/Layout"
import Liked from "./Views/Liked/Liked"
import Profile from "./Views/Profile/Profile"

function App() {
  return (
    <div>
      <Layout />
      <Router>
        <Home path="/home" />
        <Liked path="/liked" />
        <Profile path="/profile" />
      </Router>
    </div>
  )
}

export default App
