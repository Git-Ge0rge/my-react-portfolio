import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Banner from '../components/Banner/Banner'
import PricingCard from '../components/PricingCard/PricingCard'
import Work from '../components/Work/Work.jsx'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Banner heading="PROJECTS." text="Some of my most recent work."/> 
      <Work/>
      <PricingCard />
      <Footer/>
    </div>
  )
}

export default Project