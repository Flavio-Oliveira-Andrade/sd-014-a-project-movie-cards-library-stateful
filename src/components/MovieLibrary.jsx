import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({ [name]: value });
  }

  onSearchTextChange = (event) => {
    const { movies } = this.props;
    console.log(event.target.value);
    if (event.target.value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter(({ title, subtitle, storyline }) => {
          const content = `${title}, ${subtitle}, ${storyline}`;
          console.log(content.includes(event.target.value));
          return content.includes(event.target.value);
        }),
      });
    }
    this.handleChange(event);
  }

  onBookmarkedChange = () => {

  }

  onSelectedGenreChange = () => {

  }

    addMovie = (movie) => {
      const { movies } = this.state;
      this.setState({ movies: [...movies, movie] });
    }

    render() {
      const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
      return (
        <div>
          <h2> My awesome movie library </h2>
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.onSearchTextChange }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ this.onBookmarkedChange }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.onSelectedGenreChange }
          />
          <AddMovie onClick={ this.addMovie } />
          <MovieList movies={ movies } />
        </div>
      );
    }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
