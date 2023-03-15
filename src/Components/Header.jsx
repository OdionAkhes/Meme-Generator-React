import React from 'react';
import trollFace from '../TrollFace.jpg'
import '../index.css'

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={trollFace} alt="" className="header--image" />
        <h2 className="header--title">Meme Generator</h2>
 
      </header>
    </div>
  );
}

export default Header
