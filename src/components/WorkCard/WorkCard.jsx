import React from 'react'
import "./WorkCard.css"

// add hover animation for details


const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="Project 1" />
        <h2 className='project-title'>{props.title}</h2>
        <div className="project-details">
          <p className="description-container">{props.text}</p>
          <div className="project-btns">
            <a href={props.view} className="btn">
              View
            </a>
            <a href={props.source} className="btn">
              Source 
            </a>
          </div>
        </div>
    </div>
  )
}

export default WorkCard