import React from 'react';
import styles from './Header.module.scss';
import Searchbar from './Searchbar/Searchbar';

const Header = () => (
  <header>
    <section className={styles.logo}>
      <h1>Your Cinema App</h1>
    </section>
    <Searchbar />
    <div className={styles.list}>
      <ul>
        <li>Sign up</li>
        <li>Sign in</li>
      </ul>
    </div>
  </header>
);

export default Header;
