import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import tmdbLogo from '@assets/image/tmdb-logo.svg';

import styles from './Header.module.scss';
import { useSelector } from 'react-redux';

const Header = () => {
  const movieTitle = useSelector((state) => state.movieTitle.title);

  return (
    <>
      <header className={styles['header']}>
        <div className={styles['heading']}>
          <h1 className={styles['logo']}>
            <Link to="/">
              <span className={styles['tmdb-logo']}>
                <img src={tmdbLogo} alt="TMDB" />
              </span>
              TMDB-REACT
            </Link>
          </h1>
        </div>
        <nav className={styles['nav']}>
          <ul className={styles['navlist']}>
            <li className={styles['navitem']}>
              <NavLink to="./tv">TV프로그램</NavLink>
            </li>
            <li className={styles['navitem']}>
              <NavLink to="./movie">영화</NavLink>
            </li>
          </ul>
        </nav>
        <div className="">{movieTitle}</div>
      </header>
    </>
  );
};

export default Header;
