// implement MovieLibrary component here
import React from 'react';
import propTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.type === 'checkbox') {
      this.setState({ bookmarkedOnly: event.target.checked });
    }
  }

  onClick(filme) {
    const { movies } = this.state;
    this.setState(
      { movies: [...movies], filme },
    );
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.moviesFilter(this.state) } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.object,
  ).isRequired,
};

export default MovieLibrary;
