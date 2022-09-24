import React from 'react'
import "./Footer.css"
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin} from "react-icons/fa"  

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-div">
          <div className="location">
            <FaHome size={20} style={{
              color:"#fff",
              marginRight: "2rem"
            }} />
            <div>
              <p>Toronto, ON</p>
            </div>
          </div> 
          <div className="phone">
            <h4> 
              <FaPhone size={20} style={{
                color:"#fff",
                marginRight: "2rem"
              }} />
              416-556-5354
            </h4>
          </div> 
          <div className="email">
            <h4> 
              <FaMailBulk size={20} style={{
                color:"#fff",
                marginRight: "2rem"
              }} />
              george.haddad77@yahoo.com
            </h4>
          </div> 
        </div>

        <div className="right-div">
          <h4>About Me</h4>
          <p> George is a full stack developer based out of Toronto, Canada.</p>
          <div className="social">
            <a href="https://github.com/Git-Ge0rge">
              <FaGithub size={30} style={{
                    color:"#fff",
                    marginRight: "1rem"
              }} />
            </a>
            <a href="https://www.linkedin.com/in/georgehaddad1997/">
              <FaLinkedin size={30} style={{
                    color:"#fff",
                    marginRight: "1rem"
              }} />
            </a> 
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer