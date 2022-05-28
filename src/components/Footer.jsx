import React from 'react';
import gitHub from '../images/github.png'
import linkedIn from '../images/linkedin.png'

const Header = () => {
  return (
    <div className='footer'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/hays-b">
        <img src={gitHub} alt='GitHub' style={{width:'10vmin', height:'10vmin'}}/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hays-bondy/">
        <img src={linkedIn} alt='LinkedIn' style={{width:'10vmin', height:'10vmin'}}/>
        </a>
    </div>
  );
}

export default Header;
