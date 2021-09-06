import React from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({ [name]: value });
  }

  onBookmarkedChange(event) {
    const { movies } = this.props;
    if (event.target.checked) {
      this.setState({ movies: movies.filter((movie) => movie.bookmarked) });
    } else {
      this.setState({ movies });
    }
    this.handleChange(event);
  }

  onSelectedGenreChange(event) {
    const { movies } = this.props;
    if (event.target.value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter((movie) => movie.genre === event.target.value),
      });
    }
    this.handleChange(event);
  }

  onSearchTextChange(event) {
    const { movies } = this.props;
    if (event.target.value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter(({ title, subtitle, storyline }) => {
          const content = `${title}, ${subtitle}, ${storyline}`;
          return content.includes(event.target.value);
        }),
      });
    }
    this.handleChange(event);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie />
        <MovieList movies={ movies } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
