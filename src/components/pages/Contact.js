import React from 'react';
import ContactForm from '../details/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Let's work together! Or, send me a random note or a link to your dog's IG.</p>
        <ContactForm />
    </div>
  );
};
export default Contact;
