import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Searchbar from './components/Header/Searchbar/Searchbar';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';

class App extends React.Component {
  state = {
    searchedMovie: [],
    targetValue: '',
  };

  searchMovies = (event) => {
    event.preventDefault();
    const searchText = event.target[0].value;
    this.setState({ searchedMovie: [] });
    this.setState({ targetValue: searchText });
    fetch('http://www.omdbapi.com/?apikey=6f576247&s=' + searchText)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ searchedMovie: response.Search });
      });

    event.target.reset();
  };

  render() {
    // zwraca najpierw undefined a dopiero potem tablicę z filmami
    console.log(this.state.searchedMovie);
    return (
      <>
        <Header>
          <Searchbar submitFn={this.searchMovies} />
        </Header>
        <div className="wrap">
          <Aside />
          {this.state.searchedMovie[0] ? (
            <Main
              searchedMovie={this.state.searchedMovie}
              targetValue={this.state.targetValue}
            />
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
}

export default App;
