import React from "react";
import './ProjectsCard.css'; 

function ProjectCard({title, link, content}) {
  return(
    <div className='projectCardContainer'>
      <a href={link} target="_blank" className='projectCardTitle'>{title}</a>
      <p className='projectCardContent'>{content}</p>
    </div>
  )
}

export default ProjectCard;