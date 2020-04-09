import React from 'react';
import './Root.scss';
import Header from '../../components/Header/Header';
import Searchbar from '../../components/Header/Searchbar/Searchbar';
import Aside from '../../components/Aside/Aside';
import SearchedMovies from '../../components/SearchedMovies/SearchedMovies';
import { Route, BrowserRouter } from 'react-router-dom';
import NewReleases from '../NewReleases/NewReleases';
import ComingSoon from '../ComingSoon/ComingSoon';
import Watchlist from '../Watchlist/Watchlist';
import Game from '../Game/Game';

class Root extends React.Component {
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

  cleanSearch = () => {
    this.setState({ searchedMovie: [] });
  };

  render() {
    return (
      <>
        <Header>
          <Searchbar submitFn={this.searchMovies} />
        </Header>
        <div className="wrap">
          <BrowserRouter>
            <>
              <Aside />

              <Route exact path="/new" component={NewReleases} />
              <Route path="/comingsoon" component={ComingSoon} />
              <Route path="/watchlist" component={Watchlist} />
              <Route path="/game" component={Game} />
              <Route path="/">
                {this.state.searchedMovie ? (
                  <SearchedMovies
                    searchedMovie={this.state.searchedMovie}
                    targetValue={this.state.targetValue}
                    cleanSearch={this.cleanSearch}
                  />
                ) : (
                  ''
                )}
              </Route>
            </>
          </BrowserRouter>
        </div>
      </>
    );
  }
}

export default Root;
