import React from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Searchbar from './components/Header/Searchbar/Searchbar';
import Aside from './components/Aside/Aside';
// import Main from './components/Main/Main';
import Sign from './components/Header/Sign/Sign';

class App extends React.Component {
  state = {
    searchedMovie: {
      Search: null,
    },
  };

  searchMovies = (event) => {
    event.preventDefault();
    const searchText = event.target[0].value;
    this.setState({ searchedMovie: [] });
    fetch('http://www.omdbapi.com/?apikey=6f576247&s=' + searchText)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ searchedMovie: response });
      });

    event.target.reset();
  };

  render() {
    // zwraca najpierw undefined a dopiero potem tablicę z filmami
    console.log(this.state.searchedMovie.Search);
    return (
      <>
        <Header>
          <Searchbar submitFn={this.searchMovies} />
          <Sign />
        </Header>
        <div className="wrap">
          <Aside />
          {/* 
          
          Main.js do wyrenderowania w tym miejscu -          
          */}
        </div>
      </>
    );
  }
}

export default App;
