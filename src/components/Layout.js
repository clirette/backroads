import React, { Fragment } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
