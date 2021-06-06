import React from "react";
import './Contact.css';

function Contact() {
  return(
    <div className='contactContainer'>
      <div className='contact-content'>
        <h2 className='contact-title'>Contact</h2>
        <p className='contact-text'>My Email: frankfoo37@gmail.com</p>
        <a className='contact-link' href="https://www.linkedin.com/in/frank-foo-b22963199/" target="_blank">My LinkedIn</a>
        <a className='contact-link' href="https://github.com/frankfoo/" target="_blank">My Github</a>
      </div>
    </div>
  )
}

export default Contact;