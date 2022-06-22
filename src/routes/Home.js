import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import HomeBanner from "../components/HomeBanner/HomeBanner"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeBanner/>
        <Footer/>
    </div>
  )
}

export default Home