import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import HomeBanner from "../components/HomeBanner/HomeBanner"
import Work from "../components/Work/Work.jsx"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeBanner/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home