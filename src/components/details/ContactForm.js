import React, { useState } from 'react';
import { navigate } from '@reach/router';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }  

  const handleSubmit = event => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(navigate('/success'))
      .catch(error => alert(error));

    event.preventDefault();
  }

  const handleChange = event => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

    return (
        <div className='contact-form'>
        <form name="contact" method="post" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name" onChange={handleChange}/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" onChange={handleChange}/></label>
          </p>
          <p>
            <label>Message: <textarea name="message" cols="50" rows="5" onChange={handleChange}></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </div>
    )
}

export default ContactForm
