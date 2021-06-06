import React from "react";
import './Projects.css'; 
import ProjectsCard from './ProjectsCard';

function Projects() {
  const project1Desc = 'A simple script written in javascript which takes in a list of items that you want, and constantly polls the latest ozbargain posts looking for these items. If a match is found, an email will be sent notifying you.';
  const project2Desc = 'A simple portfolio website written in react.';

  return(
    <div className='projectsContainer'>
      <div className='projects-content'>
          <h2 className='projects-title'>Projects</h2>
          <div className="projects-card-container">
            <ProjectsCard title='Ozbargain Tracker' link='https://github.com/frankfoo/ozbargain-tracker/' content={project1Desc} />
            <ProjectsCard title='Portfolio Website' link='https://github.com/frankfoo/portfolio' content={project2Desc} />
          </div>
      </div>
    </div>
  )
}

export default Projects;