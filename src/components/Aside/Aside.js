import React from 'react';
import styles from './Aside.module.scss';

const Aside = () => (
  <section className={styles.section}>
    <ul>
      <li>New releases</li>
      <li>Coming soon</li>
      <li>Watchlist</li>
      <li>Play & Win!</li>
    </ul>
  </section>
);

export default Aside;
