import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { REACT_APP_API_KEY } = process.env;
    const form = useRef();
    const [submitError, setSubmitError] = useState('this is the submit error')
    let navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sp5ytxd', 'template_sgpuewk', form.current, REACT_APP_API_KEY)
      .then((result) => {
          setSubmitError('')
          navigate('/contact/success', {replace:true})
      }, (error) => {
          setSubmitError(error.text)
          console.log(error.text)
      });
  };

  return (
      <div>
          {submitError ? <p>{submitError}</p>: null}
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Mr. John Smith' required/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder='johnsmith@email.com'required/>
      <label>Message</label>
      <textarea name="message" placeholder='message'required/>
      <input type="submit" value="Send" />
    </form>
    <button onClick={()=>{navigate('/contact/success')}}>Here success</button>
    </div>
  );
};

export default Contact;