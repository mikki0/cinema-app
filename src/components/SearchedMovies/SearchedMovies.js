import React from 'react';
import styles from './SearchedMovies.module.scss';

const SearchedMovies = (props) => (
  <main>
    {props.searchedMovie[0] ? (
      <div className={styles.title_wrap}>
        <h2 className={styles.title}>
          Searched movies for:<span> {props.targetValue}</span>
        </h2>
        <i class="las la-times-circle" onClick={props.cleanSearch}></i>
      </div>
    ) : (
      ''
    )}
    <div className={styles.moviesWrapper}>
      {props.searchedMovie.map((item) => (
        <section className={styles.movie}>
          <img className={styles.movieImage} alt="Poster" src={item.Poster} />
          <div className={styles.overlay}></div>
          <h4 className={styles.movieTitle}>{item.Title}</h4>
          <p className={styles.year}>{item.Year}</p>
        </section>
      ))}
    </div>
  </main>
);

export default SearchedMovies;
