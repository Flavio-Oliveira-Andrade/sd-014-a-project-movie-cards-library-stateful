// Implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  //  https://overreacted.io/pt-br/why-do-we-write-super-props/
  constructor(props) {
    super(props); 

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };

    this.aST = this.aST.bind(this);
    this.aBO = this.aBO.bind(this);
    this.aSG = this.aSG.bind(this);
  }

  aST({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  aBO({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  aSG({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  render() {
    const { searchText: s, bookmarkedOnly: b, selectedGenre: g, movies: m } = this.state;
    
    return (
      <>
        <SearchBar
          searchText={ s }
          bookmarkedOnly={ b }
          selectedGenre={ g }
          onSearchTextChange={ this.aST }
          onBookmarkedChange={ this.aBO }
          onSelectedGenreChange={ this.aSG }
        />
        <MovieList movies={ m } />         
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
