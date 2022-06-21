import React from 'react';
import { linkedIn, gitHub } from '../assets'

const Header = ({ activeNav }) => {
  return (
    <div className={activeNav ? 'footer moved': 'footer'}>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/hays-b" className='footer-ctn'>
        <img src={gitHub} alt='GitHub' className='footer-icon'/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hays-bondy/" className='footer-ctn'>
        <img src={linkedIn} alt='LinkedIn' className='footer-icon'/>
        </a>
    </div>
  );
}

export default Header;
