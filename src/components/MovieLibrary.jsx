import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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
  }

  // Essa parte do código tive a ajuda do Ilan Aragão para entender como implementar e o que cada elemento faz
  handleChange({ target }) {
    const { name } = target;
    if (name.type === 'checkbox') {
      this.setState({
        [name]: name.checked,
      });
    } else {
      this.setState({
        [name]: name.value,
      });
    }
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
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ this.movieFilter(this.state) } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
