import React from 'react';
import styles from './Searchbar.module.scss';

const Searchbar = () => (
  <div className={styles.search}>
    <input
      type="text"
      className={styles.searchTerm}
      placeholder="Search movies"
    />
    <button type="submit" className={styles.searchButton}>
      <i className="las la-search"></i>
    </button>
  </div>
);

export default Searchbar;
