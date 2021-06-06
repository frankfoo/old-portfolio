import React from "react";
import './About.css'; 
import AboutCard from './AboutCard.js';

function About() {
  const card_1_content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const card_2_content = ['React', 'HTML', 'CSS', 'Python', 'C'];
  const card_3_content = ['Tech Enthusiast', 'Casual Basketball', 'Science Fiction', 'Films'];
  const card_4_content = ['COMP2041 Software Tools', 'COMP3311 Database Systems', 'COMP3331 Computer Networks & Applications', 'COMP6080 Web Front-end Programming', 'COMP6841 Extended Security Engineering and Cyber Security'];

  return(
    <div className='aboutContainer'>
      <div className='about-content'>
        <AboutCard title='About' type={0} content={card_1_content} />
        <AboutCard title='Skills' type={1} content={card_2_content}/>
        <AboutCard title='Interests/Hobbies' type={1} content={card_3_content}/>
        <AboutCard title='Notable Courses' type={1} content={card_4_content}/>
      </div>
    </div>
  )
}

export default About;