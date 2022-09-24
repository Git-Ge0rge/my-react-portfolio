import "./AboutContent.css";
import {Link} from "react-router-dom"
import React from 'react'
import React1 from "../../assets/react1.jpg"
import React2 from "../../assets/react2.webp"


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a full stack React Developer specializing in the MERN stack. I create responsive secure websites for my clients.</p>
            <Link to="/contact"> 
                <button className="btn"> Contact </button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="top img-stack">
                    <img src={React1}
                        className="img"
                        alt="react1" 
                    />
                </div>
                <div className="bottom img-stack">
                    <img src={React2}
                        className="img"
                        alt="react2" 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent