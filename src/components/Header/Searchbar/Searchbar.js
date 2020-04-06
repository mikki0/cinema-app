import React from 'react';
import styles from './Searchbar.module.scss';

const Searchbar = ({ submitFn }) => (
  <div>
    <form className={styles.search} autoComplete="off " onSubmit={submitFn}>
      <input
        type="text"
        className={styles.searchTerm}
        placeholder="Search movie"
      />
      <button type="submit" className={styles.searchButton}>
        <i className="las la-search"></i>
      </button>
    </form>
  </div>
);

export default Searchbar;
