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
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({ [name]: value });
  }

  handleClick(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  onSearchTextChange(event) {
    const { movies } = this.props;
    if (event.target.value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter(({ title, subtitle, storyline }) => {
          const data = `${title}, ${subtitle}, ${storyline}`;
          return data.includes(event.target.value);
        }),
      });
    }
    this.handleChange(event);
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
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes
    .arrayOf(propTypes.object).isRequired,
};

export default MovieLibrary;
