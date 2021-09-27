// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: (movies),
    };
    this.saveState = this.saveState.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  onSearchTextChange({ target }) {
    this.saveState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {

  }

  onSelectedGenreChange({ target }) {
    this.saveState({ selectedGenre: target.value });
  }

  saveState(content) {
    this.setState(content);
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.handleClick }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
