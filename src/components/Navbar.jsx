import React from 'react';
import './../styles/Navbar.scss';
import { ReactComponent as WaveSVG } from './../assets/singlewave1.svg';

const Navbar = (props) => {
  return (
    <nav className="nav">
      <ul>
        <li className="nav-item">
          <a href="#intro">Intro</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#about-me">About Me</a>
        </li>
      </ul>
      <div className="wave-container">
        <WaveSVG />
      </div>
    </nav>
  );
};

export default Navbar;
