import React from 'react';
import PropTypes from 'prop-types';
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

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick(event) {
    this.setState(({ movies }) => ({
      movies: [...movies, event],
    }));
  }

  filterMovies({ movies, searchText, bookmarkedOnly, selectedGenre }) {
    const filteredGetMovies = movies.filter((movie) => {
      const titleGet = movie.title.includes(searchText);
      const subtitleGet = movie.subtitle.includes(searchText);
      const storylineGet = movie.storyline.includes(searchText);
      return titleGet || subtitleGet || storylineGet;
    });
    if (bookmarkedOnly) return filteredGetMovies.filter((movie) => movie.bookmarked);
    if (selectedGenre) {
      return filteredGetMovies.filter((movie) => movie.genre === selectedGenre);
    }
    return filteredGetMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2>My Awesome Movie Library</h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies(this.state) } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
