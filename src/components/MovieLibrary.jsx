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

    this.movieFilter = this.movieFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Essa parte do código tive a ajuda do Ilan Aragão para entender como implementar e o que cada elemento faz
  handleChange(event) {
    if (event.target.type === 'checkbox') {
      this.setState({
        [event.target.name]: event.target.checked,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }

  handleClick(event) {
    this.setState(({ movies }) => ({
      movies: [...movies, event],
    }));
  }

  movieFilter({ movies, searchText, bookmarkedOnly, selectedGenre }) {
    const movieFiltered = movies.filter((movie) => {
      const movieTitle = movie.title.includes(searchText);
      const movieSubititle = movie.subtitle.includes(searchText);
      const movieStoryline = movie.storyline.includes(searchText);
      return movieTitle || movieSubititle || movieStoryline;
    });
    if (bookmarkedOnly) {
      return movieFiltered.filter((movie) => movie.bookmarked);
    } if (selectedGenre) {
      return movieFiltered.filter((movie) => movie.genre === selectedGenre);
    }
    return movieFiltered;
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
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
        <MovieList movies={ this.movieFilter(this.state) } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
