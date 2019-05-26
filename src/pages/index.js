import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './../scss/index.scss';
import thumbnail from './../images/thumbnail.png';

import PolandFlagIcon from './../images/icons/poland-flag.png';

const jobOffers = true;

export default ({ data }) => (
  <>
    <header className="header">
      <nav className="header__nav">
        <div className="header__site-logo">
          <Link to="/" className="header__site-logo-permalink">
            Mateusz Górzański
          </Link>
        </div>
        <ul className="header__menu">
          <li className="header__menu-item">
            <Link
              className="header__menu-item-link header__menu-item-link--active"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-item-link" href="#about-me">
              About
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-item-link" href="#resume">
              Resume
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-item-link" href="#work">
              Work
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-item-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <ul className="header__links-menu">
          <li className="header__links-menu-item">
            <Link to="/" className="header__links-menu-item-link">
              <img
                src={PolandFlagIcon}
                alt="Flaga polski"
                className="header__links-menu-item-icon"
              />
              <span className="header__links-menu-item-text" lang="pl">
                Zmień na polski
              </span>
            </Link>
          </li>
          <li className="header__links-menu-item">
            <Link to="/" className="header__links-menu-item-link">
              <svg
                className="header__links-menu-item-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="header__links-menu-item-text">Github</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__jumbotron">
        <div className="header__jumbotron-inner">
          <h1 className="header__jumbotron-title">
            Front-end and React/React Native Developer
          </h1>
          <h4 className="header__jumbotron-subtitle">
            Programmer | Student | Aspiring Software Developer
          </h4>
          <span className="header__jumbotron-text">
            My name is Mateusz. I build websites and apps.
          </span>
        </div>

        <div className="header__jumbotron-icon">
          <a href="#about-me">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              transform="rotate(90)"
              fill="#fff"
              viewBox="0 0 24 24"
            >
              <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
            </svg>
          </a>
        </div>
      </div>
    </header>

    <main className="main">
      <section className="section" id="about-me">
        <div className="section__inner">
          <h3 className="section__title">About me</h3>
          <div className="section__columns">
            <p className="section__column">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="section__column">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="section__column">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad <img src="#" alt="#" />
            </p>
          </div>
        </div>
        {jobOffers && (
          <div className="section__fs-container">
            <div className="section__fs-inner">
              <h2 className="section__fs-title">Job offers</h2>
              <p className="section__fs-text">
                Currently I'm looking for a job as a Front-end developer,
                React/React Native developer, JavaScript developer or similar.
                If you think I'm the right candidate let me know.{' '}
                <span className="text-important">
                  <a href="#contact">Contact me</a>
                </span>
                . Need to be near Kraków or remote only.
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="section" id="resume">
        <div className="section__left-float-featured-image">
          <img src={thumbnail} alt="#" className="section__float-image" />
        </div>
        <div className="section__inner section__inner--left-float">
          <h3 className="section__title">Resume</h3>
          <table className="section__table">
            <tr>
              <td><th>Skills</th></td>
              <td>
              Tworzenie aplikacji internetowych z wykorzystaniem biblioteki React
<br />Tworzenie aplikacji mobilnych z wykorzystaniem biblioteki React Native
<br />Podstawowa znajomość systemu kontroli wersji GIT
<br />Umiejętność posługiwania się menedżerami pakietów NPM i Yarn oraz menedżerem zadań Webpack
<br />JavaScript
<br />Podstawowa znajomość Redux i GraphQL
<br />Podstawowa znajomość C++
<br />Podstawowa znajomość PHP i MySQL
<br />Tworzenie responsywnych stron internetowych z wykorzystaniem HTML5 i CSS3
<br />Podstawowa znajomość Node.js i MongoDB
<br />Podstawowa znajomość Linux Bash
<br />Język angielski – poziom średniozaawansowany
              </td>
            </tr>
            <tr>
              <td>
                <th>Achievements</th>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <th>Education</th>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <th>Courses and trainings</th>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </section>
    </main>
  </>
);

//export const query = graphql``;
