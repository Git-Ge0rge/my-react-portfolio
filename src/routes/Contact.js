import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Banner heading="CONTACT."  text="Let's have a chat."/>
      <Footer/>
    </div>
  )
}

export default Contact