import React from 'react';
import ContactForm from './ContactForm';
import './../styles/Contact.scss';

const Contact = (props) => {
  return (
    <section id="contact">
      <div className="contact-wrapper">
        <h2>Contact Me!</h2>
        <p>
          If you're impressed with my work and would like to contact me, fill
          out the form below!
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
