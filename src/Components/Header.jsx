import React from 'react';
import trollFace from '../TrollFace.jpg'
import '../index.css'

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={trollFace} alt="" className="header--image" />
        <h2 className="header--title">Header component</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </header>
    </div>
  );
}

export default Header