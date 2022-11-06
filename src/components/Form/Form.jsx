import "./Form.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PopUp from "../PopUp/PopUp";

export const Form = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);
  const [btnPopUp, setBtnPopUp] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }  
  const form = useRef();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!isValidEmail(event.target.value)) {
      setStatusMessage('Email is invalid');
    } else {
      console.log("good email")
      setEmail(event.target.value);
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const clearForm = () => { 
    document.getElementById("contact-form").reset();
    // resets form after submission, need to clear state as well 
    setName(null);
    setEmail(null);
    setMessage(null)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(`
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `)

    if (!email || !name || !message) {
      setStatusMessage("Please fill out all fields.")
      setBtnPopUp(true)
      return //to stop other logic, if any field is empty
    } else {
      setStatusMessage("Email has been sent!")
      setBtnPopUp(true)
      console.log("email sent successfully")
      emailjs.sendForm('service_lovgtqp', 'template_2fhjd47', form.current, process.env.REACT_APP_EMAIL_JS_KEY)
        .then((result) => {
            console.log(result.text);
      }, (message) => {
            console.log(message.text);
      });

      clearForm()
    
    }
  }

  return (
    <>
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          ref={form.name} 
          onChange={handleNameChange} 
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          ref={form.email}
          onChange={handleEmailChange} 
          className="form-control" 
        />

        <label>Message</label>
        <textarea 
          className="form-control" 
          name="message" 
          ref={form.message}
          onChange={handleMessageChange} 
        />
          
        <input 
          type="submit" 
          className="btn btn-success btn-block" 
          id="submit-btn"
          value="Send" />

      </form>
        <PopUp trigger={btnPopUp} setTrigger={setBtnPopUp}>
          <h3 > {statusMessage} </h3>
        </PopUp>

    </>
  );
};

export default Form