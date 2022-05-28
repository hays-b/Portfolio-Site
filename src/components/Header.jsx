import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to='/'>About</Link>
        <Link to='/portfolio'>Portfolio</Link>
    </div>
  );
}

export default Header;
