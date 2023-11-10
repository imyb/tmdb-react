import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

import styles from './Layout.module.scss';

const Layout = ({ type: layoutType }) => {
  return (
    <>
      <Header />
      <main className={styles['container']}>
        <div className={styles['content']}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
