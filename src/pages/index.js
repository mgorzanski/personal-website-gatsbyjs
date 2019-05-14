import React from 'react';
import { Link } from 'gatsby';
import './../scss/index.scss';

import GithubIcon from './../images/icons/github.svg';

const IndexPage = () => (
  <>
    <header className="header">
      <nav className="header__nav">
        <div className="header__site-logo">
          <Link to="/" className="header__site-logo-permalink">Mateusz Górzański</Link>
        </div>
        <ul className="header__menu">
          <li className="header__menu-item"><Link className="header__menu-item-link header__menu-item-link--active" to="/">Home</Link></li>
          <li className="header__menu-item"><a className="header__menu-item-link" href="#about">About</a></li>
          <li className="header__menu-item"><a className="header__menu-item-link" href="#resume">Resume</a></li>
          <li className="header__menu-item"><a className="header__menu-item-link" href="#work">Work</a></li>
          <li className="header__menu-item"><a className="header__menu-item-link" href="#contact">Contact</a></li>
        </ul>
        <ul className="header__links-menu">
          <li className="header__links-menu-item"><Link to="/" className="header__links-menu-item-link">Zmień na polski</Link></li>
          <li className="header__links-menu-item"><a href="#" className="header__links-menu-item-link">GitHub</a></li>
        </ul>
      </nav>
    </header>
  </>
);

export default IndexPage;
