import React from "react";
import './AboutCard.css'; 

function AboutCard({title, type, content}) {
  return(
    <div className='aboutCardContainer'>
      <h2 className='aboutCardTitle'>{title}</h2>
        {type === 0 && 
          <p>{content}</p>}
        {type === 1 && 
            content.map((item) => <li className='card-content'>{item}</li>)
        }
    </div>
  )
}

export default AboutCard;