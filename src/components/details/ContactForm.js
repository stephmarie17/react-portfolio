import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className='contact-form'>
        <form name="contact" method="post" action="/success">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message" cols="50" rows="5"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </div>
    )
}

export default ContactForm
