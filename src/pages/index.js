import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './../scss/index.scss';
import thumbnail from './../images/thumbnail.png';

import PolandFlagIcon from './../images/icons/poland-flag.png';
import PortfolioDevBees from './../images/portfolio/devbees.png';
import PortfolioDanceHouse from './../images/portfolio/dance-house.png';
import PortfolioToday from './../images/portfolio/rss-app.png';
import PortfolioPersonalWebsite from './../images/portfolio/matgor.png';
import PortfolioCalendar from './../images/portfolio/calendar-app.png';
import PortfolioPomodoro from './../images/portfolio/pomodoro.png';

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
              <th>Skills</th>

              <td>
                Creating web applications using React library
                <br />
                Creating mobile applications using React Native library
                <br />
                Basic knowledge of GIT version control system
                <br />
                Ability to use package managers such as NPM and Yarn as well as
                task manager Webpack
                <br />
                JavaScript
                <br />
                Basic knowledge of Redux and GraphQL
                <br />
                Familiar with C++
                <br />
                Familiar with PHP
                <br />
                Familiar with MySQL and PostgreSQL
                <br />
                Creating responsive websites using HTML5 and CSS3
                <br />
                Basic knowledge of Node.js and MongoDB
                <br />
                Familiar with Linux Bash
                <br />
                English - intermediate level
              </td>
            </tr>
            <tr>
              <th>Achievements</th>

              <td>
                <span>Finalist in 7th edition</span> of Polish nationwide
                computer science competition{' '}
                <span>PING – Potyczki Informatyczne Nowej Generacji</span>
                <br />
                organised by West Pomeranian University of Technology in
                Szczecin
                <br />
                <span>4th place, honourable mention</span> in XIV Polish
                nationwide computer science competition
                <br />
                organised by The College of Tourism and Ecology in Sucha
                Beskidzka
              </td>
            </tr>
            <tr>
              <th>Education</th>

              <td>
                <span>
                  High School, Centrum Kształcenia Zawodowego i Ustawicznego nr
                  2, Wadowice, 2016 - 2020
                </span>
                <br />
                IT technician
              </td>
            </tr>
            <tr>
              <th>Courses and trainings</th>

              <td>
                Object-Oriented JavaScript (Udacity)
                <br />
                JavaScript Promises (Udacity)
                <br />
                learnyounode (NodeSchool)
                <br />
                Automate Daily Development Tasks with Bash (Egghead)
              </td>
            </tr>
          </table>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section__inner">
          <h3 className="section__title">Work</h3>
          <p className="section__text">
            Here you can see some of my projects. There are more on my GitHub.
          </p>
          <div className="section__columns">
            <div className="section__column">
              <div className="project-link">
                <img
                  src={PortfolioDevBees}
                  alt="devbees"
                  className="project-image"
                />
                <span className="project-image-caption">
                  devbees - team website
                </span>
                <div className="project-links">
                  <p>Website built for a team I'm part of.</p>
                  <a
                    className="project-link-btn"
                    href="http://sharku.ct8.pl/devbees/"
                    role="button"
                  >
                    <span href="#" className="project-link-btn-text">
                      Open
                    </span>
                    <svg
                      className="project-link-btn-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="section__column">
              <div className="project-link">
                <img
                  src={PortfolioDanceHouse}
                  alt="Dance House"
                  className="project-image"
                />
                <span className="project-image-caption">
                  Dance House - dance studio
                </span>
                <div className="project-links">
                  <p>Website built for my client.</p>
                  <a
                    className="project-link-btn"
                    href="http://dancehouse.com.pl/"
                    role="button"
                  >
                    <span href="#" className="project-link-btn-text">
                      Open
                    </span>
                    <svg
                      className="project-link-btn-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="section__column">
              <div className="project-link">
                <img
                  src={PortfolioToday}
                  alt="Today"
                  className="project-image"
                />
                <span className="project-image-caption">
                  Today - an RSS reader web app
                </span>
                <div className="project-links">
                  <p>
                    Built using Laravel 5. Currently I cannot provide a link to
                    the working app.
                  </p>
                  <a
                    className="project-link-btn"
                    href="https://github.com/mgorzanski/rss-app"
                    role="button"
                  >
                    <span href="#" className="project-link-btn-text">
                      GitHub
                    </span>
                    <svg
                      className="project-link-btn-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section__columns">
            <div className="section__column">
              <div className="project-link">
                <img
                  src={PortfolioPersonalWebsite}
                  alt="Personal website"
                  className="project-image"
                />
                <span className="project-image-caption">
                  My old personal website
                </span>
                <div className="project-links">
                  <p>
                    My old personal website, builded using GatsbyJS, hosted on
                    Netlify.
                  </p>
                  <a
                    className="project-link-btn"
                    href="https://github.com/mgorzanski/personal-website"
                    role="button"
                  >
                    <span href="#" className="project-link-btn-text">
                      GitHub
                    </span>
                    <svg
                      className="project-link-btn-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="section__column">
              <div className="project-link">
                <img
                  src={PortfolioCalendar}
                  alt="Calendar"
                  className="project-image"
                />
                <span className="project-image-caption">
                  Calendar desktop app
                </span>
                <div className="project-links">
                  <p>My current project. Coming soon...</p>
                  <a
                    className="project-link-btn"
                    href="https://github.com/mgorzanski/calendar-app"
                    role="button"
                  >
                    <span href="#" className="project-link-btn-text">
                      GitHub
                    </span>
                    <svg
                      className="project-link-btn-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="section__column">
              <div className="project-link">
                <img
                  src={PortfolioPomodoro}
                  alt="devbees"
                  className="project-image"
                />
                <span className="project-image-caption">
                  Pomodoro desktop app
                </span>
                <div className="project-links">
                  <p>Simple app built using React and Electron</p>
                  <a
                    className="project-link-btn"
                    href="https://github.com/mgorzanski/pomodoro"
                    role="button"
                  >
                    <span href="#" className="project-link-btn-text">
                      GitHub
                    </span>
                    <svg
                      className="project-link-btn-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="https://github.com/mgorzanski">
          <div className="section__fs-container">
            <div className="section__fs-inner">
              <h2 className="section__fs-title">
                Visit my GitHub&nbsp;&nbsp;&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  className="section__fs-title-icon"
                >
                  <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                </svg>
              </h2>
            </div>
          </div>
        </a>
      </section>

      <section className="section" id="contact">
        <div className="section__inner">
          <h3 className="section__title">Contact</h3>
        </div>

        <div className="section__fs-container">
          <div className="section__fs-inner">
            <h4 className="section__fs-heading">Contact informations</h4>
            <p className="section__fs-text">
              If you want to talk with me look no further.
            </p>
            <span className="contact-informations">
              <span>Email</span>
              gorzanski.mateusz@gmail.com
              <span>Phone</span>
              +48 537 743 753
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="footer__copyright">
          Copyright &copy; 2019 Mateusz Górzański
        </span>
        <span className="footer__right">
          Running on <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
        </span>
      </footer>
    </main>
  </>
);

//export const query = graphql``;
