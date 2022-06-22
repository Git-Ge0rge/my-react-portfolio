import React from 'react';
import "./Banner.css";
import IntroImg from "../../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
        <div className='mask'>
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M GEORGE HADDAD.</p>
            <h1>Full Stack Developer.</h1>
            <div>
                <Link to="project" className="btn">Projects</Link>
                <Link to="contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Banner