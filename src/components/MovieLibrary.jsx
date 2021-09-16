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
    this.moviesFilter = this.moviesFilter.bind(this);
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

  moviesFilter({ searchText, bookmarkedOnly, selectedGenre, movies }) {
    return movies.filter((mov) => mov.title.includes(searchText)
    || mov.subtitle.includes(searchText)
    || mov.storyline.includes(searchText))
      .filter((mov) => (bookmarkedOnly ? mov.bookmarked : true))
      .filter((mov) => (selectedGenre ? mov.genre === selectedGenre : true));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
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
