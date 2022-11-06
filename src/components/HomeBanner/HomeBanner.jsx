import React from 'react';
import "./HomeBanner.css";
import IntroImg from "../../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="home-banner">
        <div className='mask'>
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M GEORGE HADDAD.</p>
            <h1>Full Stack Developer.</h1>
            <div>
                <Link to="projects" className="btn">Projects</Link>
                {/* <a href="https://www.linkedin.com/in/georgehaddad1997/" className="btn btn-light">Connect</a> */}
                <Link to="contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner