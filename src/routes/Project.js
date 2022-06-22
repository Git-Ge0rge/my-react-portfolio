import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Banner from '../components/Banner/Banner'
import PricingCard from '../components/PricingCard/PricingCard'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Banner heading="PROJECTS." text="Some of my most recent work."/> 
      <PricingCard />
      <Footer/>
    </div>
  )
}

export default Project