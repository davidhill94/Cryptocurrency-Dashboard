import React from 'react';
import './Header.css';
import {FaDna} from 'react-icons/fa';

const Header = () => {
  return (
    <div className='header_container'>
        <h1 id="header_title">Crypto
            <span><FaDna /></span>
            DNA</h1>
        <p>Making Crypto stats easy to see</p>
    </div>
  )
}

export default Header