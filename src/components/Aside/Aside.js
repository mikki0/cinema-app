import React from 'react';
import styles from './Aside.module.scss';
import { NavLink } from 'react-router-dom';

const Aside = () => (
  <section className={styles.section}>
    <ul>
      <li>
        <NavLink to="/new" activeClassName={styles.active}>
          New releases
        </NavLink>
      </li>

      <li>
        <NavLink to="/comingsoon" activeClassName={styles.active}>
          Coming soon
        </NavLink>
      </li>

      <li>
        <NavLink to="/watchlist" activeClassName={styles.active}>
          Watchlist
        </NavLink>
      </li>

      <li>
        <NavLink to="/game" activeClassName={styles.active}>
          Play & Win!
        </NavLink>
      </li>
    </ul>
  </section>
);

export default Aside;
