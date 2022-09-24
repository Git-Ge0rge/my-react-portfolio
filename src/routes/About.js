import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import AboutContent from '../components/AboutContent/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Banner heading="ABOUT"  text="I am a tech loving Full Stack Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About