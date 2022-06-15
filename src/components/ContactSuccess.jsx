import React from 'react';
import { Link } from 'react-router-dom'

const ContactSuccess = () => {

  return (
      <div>
          <p>Thank you for contacting me! You should receive a confirmation email shortly. And I will reach out to you as soon as I can!</p>
          <Link to='/'>Go back to home page</Link>

    </div>
  );
};

export default ContactSuccess;