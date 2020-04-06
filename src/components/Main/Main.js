import React from 'react';
import styles from './Main.module.scss';

const Main = (props) => (
  <main>
    <h2 className={styles.title}>
      Searched movies for:<span> {props.targetValue}</span>
    </h2>
    {props.searchedMovie.map((item) => (
      <section className={styles.movie}>
        <img className={styles.movieImage} alt="Poster" src={item.Poster} />
        <h4 className={styles.movieTitle}>{item.Title}</h4>
        <p className={styles.year}>{item.Year}</p>
      </section>
    ))}
  </main>
);

export default Main;
