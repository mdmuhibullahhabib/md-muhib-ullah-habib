import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="pt-16">
      <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Main