import React from 'react';
import { Link } from 'gatsby';
import './../scss/index.scss';

const IndexPage = () => (
  <>
    <header className="header">
      <nav className="header__nav">
        <div className="header__site-logo">
          <Link to="/" className="header__site-logo-permalink">Mateusz Górzański</Link>
        </div>
        <ul className="header__menu">
          <li className="header__menu-item">Home</li>
          <li className="header__menu-item">About</li>
          <li className="header__menu-item">Resume</li>
          <li className="header__menu-item">Work</li>
          <li className="header__menu-item">Contact</li>
        </ul>
        <ul className="header__links-menu">
          <li className="header__links-menu-item">GitHub</li>
        </ul>
      </nav>
    </header>
  </>
);

export default IndexPage;
