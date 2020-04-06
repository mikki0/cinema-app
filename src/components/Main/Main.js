import React from 'react';
import styles from './Main.module.scss';

const Main = (props) => (
  <main>
    <h2 className={styles.title}>Searched movie</h2>
    <section className={props.searchedMovie.Title ? styles.movie : ''}>
      <div className={props.searchedMovie.imdbRating ? styles.rating : ''}>
        {props.searchedMovie.imdbRating}
      </div>
      <img
        className={
          props.searchedMovie.Poster ? styles.movieImage : styles.displayNone
        }
        alt="Poster"
        src={props.searchedMovie.Poster}
      />
      <h4 className="movieTitle">{props.searchedMovie.Title}</h4>
      <p className="genre">{props.searchedMovie.Genre}</p>
    </section>
  </main>
);

export default Main;
