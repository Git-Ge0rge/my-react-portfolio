import React from 'react'
import "./WorkCard.css"
import { NavLink } from "react-router-dom"
import WorkCardData from "../WorkCardData"

// add hover animation for details


const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="Project 1" />
        <h2 className='project-title'>{props.title}</h2>
        <div className="project-details">
          <p>{props.text}</p>
          <div className="project-btns">
            <NavLink to={props.view} className="btn"> 
              View 
            </NavLink>
            <NavLink to={props.source} className="btn">
              Source 
            </NavLink>
          </div>
        </div>
    </div>
  )
}

export default WorkCard