import React from 'react'
import "./Banner.css"

const Banner = (props) => {
  return (
    <div className="banner">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p> {props.text} </p>
        </div>
        
    </div>
  )
}

export default Banner