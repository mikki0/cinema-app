import React from 'react';
import styles from './Main.module.scss';

const Main = (props) => (
  <main>
    <h2 className={styles.title}>Searched movies</h2>
    <section
      className={props.searchedMovie.Search[0].Title ? styles.movie : ''}>
      <div
        className={
          props.searchedMovie.Search[0].imdbRating ? styles.rating : ''
        }>
        {props.searchedMovie.Search[0].imdbRating}
      </div>
      <img
        className={
          props.searchedMovie.Search[0].Poster
            ? styles.movieImage
            : styles.displayNone
        }
        alt="Poster"
        src={props.searchedMovie.Search[0].Poster}
      />
      <h4 className="movieTitle">{props.searchedMovie.Search[0].Title}</h4>
      <p className="genre">{props.searchedMovie.Search[0].Genre}</p>
    </section>
  </main>
);

export default Main;
