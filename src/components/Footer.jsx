import React from 'react';
import gitHub from '../assets/github.png'
import linkedIn from '../assets/linkedin.png'

const Header = () => {
  return (
    <div className='footer'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/hays-b">
        <img src={gitHub} alt='GitHub' style={{width:'3rem', height:'3rem'}}/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hays-bondy/">
        <img src={linkedIn} alt='LinkedIn' style={{width:'3rem', height:'3rem'}}/>
        </a>
    </div>
  );
}

export default Header;
