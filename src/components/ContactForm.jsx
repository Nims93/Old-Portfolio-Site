import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => (
  <Formik
    initialValues={{ name: '', email: '', message: '' }}
    validationSchema={Yup.object({
      email: Yup.string().required('Enter a valid e-mail address'),
      name: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .required('Enter a name'),
      message: Yup.string()
        .min(10, 'Enter a message at least 10 characters long')
        .required('Enter a message'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <div id="name-wrapper" className="input-wrapper">
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" placeholder="e.g. Kieran Cyprien" />
          <span className="input-bottom-border"></span>
          <ErrorMessage name="name" component="div" />
        </div>

        <div id="email-wrapper" className="input-wrapper">
          <label htmlFor="email">E-mail</label>
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
          />
          <span className="input-bottom-border"></span>
          <ErrorMessage name="email" component="div" />
        </div>

        <div id="message-wrapper" className="input-wrapper">
          <label htmlFor="message">Message</label>
          <Field
            as="textarea"
            name="message"
            id="message"
            placeholder="Enter your message..."
          />
          <ErrorMessage name="mesage" component="div" />
        </div>

        <button className="submit" type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
