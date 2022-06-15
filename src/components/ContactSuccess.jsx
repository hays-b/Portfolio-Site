import React from 'react';
import { Link } from 'react-router-dom'

const ContactSuccess = () => {

  return (
      <div>
          <p>Thank you for contacting me! You should receive a confirmation email within a few minutes.</p>
          <Link to='/'>Return to home page</Link>

    </div>
  );
};

export default ContactSuccess;