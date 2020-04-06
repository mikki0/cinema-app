import React from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Searchbar from './components/Header/Searchbar/Searchbar';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import Sign from './components/Header/Sign/Sign';

class App extends React.Component {
  state = {
    searchedMovie: [],
  };

  searchMovies = (event) => {
    event.preventDefault();
    const searchText = event.target[0].value;
    this.setState({ searchedMovie: [] });
    fetch('http://www.omdbapi.com/?apikey=6f576247&t=' + searchText)
      .then((response) => response.json())
      .then((response) => {
        console.log(this);
        this.setState({ searchedMovie: response });
      });
    console.log(this);
    event.target.reset();
  };

  render() {
    return (
      <>
        <Header>
          <Searchbar submitFn={this.searchMovies} />
          <Sign />
        </Header>
        <div className="wrap">
          <Aside />
          <Main searchedMovie={this.state.searchedMovie} />
        </div>
      </>
    );
  }
}

export default App;
