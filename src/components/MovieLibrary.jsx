import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
    this.movieListFilter = this.movieListFilter.bind(this);
  }

  handleChange(event) {
    return event.target.type === 'checkbox'
      ? this.setState({ [event.target.name]: event.target.checked })
      : this.setState({ [event.target.name]: event.target.value });
  }

  onClick(event) {
    this.setState(({ movies }) => ({
      movies: [...movies, event],
    }));
  }

  movieListFilter({ movies, searchText, bookmarkedOnly, selectedGenre }) {
    const movieListFiltered = movies.filter((movie) => {
      const titleSearch = movie.title.includes(searchText);
      const subtitleSearch = movie.subtitle.includes(searchText);
      const storylineSearch = movie.storyline.includes(searchText);
      return titleSearch || subtitleSearch || storylineSearch;
    });
    if (bookmarkedOnly) {
      return movieListFiltered.filter((movie) => movie.bookmarked);
    } if (selectedGenre) {
      return movieListFiltered.filter((movie) => movie.genre === selectedGenre);
    }
    return movieListFiltered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.movieListFilter(this.state) } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
