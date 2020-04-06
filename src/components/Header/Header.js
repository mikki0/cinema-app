import React from 'react';
import styles from './Header.module.scss';

const Header = (props) => (
  <header>
    <section className={styles.logo}>
      <h1>Your Cinema App</h1>
    </section>
    {props.children}
  </header>
);

export default Header;
