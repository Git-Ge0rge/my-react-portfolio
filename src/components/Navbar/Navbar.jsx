import "./Navbar.css";
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars,  FaTimes } from  "react-icons/fa"

// add swipe animation when nav-menu is active to close menu

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click) // sets click value to opposite of current value

    const[color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >=100){ // after 100px of scrolling, changes color of nav background 
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>George Haddad</h1>     
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects/">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{color:"fff"}} />
                ) : (
                    <FaBars size={20} style={{color:"fff"}} />
                )} 
            </div> 
        </div>
    )
}

export default Navbar