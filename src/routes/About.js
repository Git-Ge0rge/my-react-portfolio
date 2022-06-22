import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"


const About = () => {
  return (
    <div>
      <Navbar/>
      <Banner heading="ABOUT"  text="I am a tech loving Full Stack Developer."/>
      <Footer/>
    </div>
  )
}

export default About