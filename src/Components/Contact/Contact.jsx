import React, { useState } from 'react'
import './Contact.css'
import ContactCard from './ContactCard'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thanks For Query..");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-upper">
        <h2>Get In Touch With Us </h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="email" placeholder='Your Email here' required />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"  placeholder='Your Text here..' />
          <span>{result}</span>
          <button type="submit" className='btn contact-btn'>Submit Now</button>
        </form>
        
      </div>
      <div className="contact-lower">
        <ContactCard/>
      </div>
    </div>
  )
}

export default Contact