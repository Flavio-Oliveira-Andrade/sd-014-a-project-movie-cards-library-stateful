import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  onClick(obj) {
    return obj;
  }

  onSearchTextChange(event) {
    const { searchText, movies } = this.state;
    this.setState({ [event.target.name]: event.target.value });
    let filteredMovies = movies;
    filteredMovies = movies.filter((ele) => ele.title.includes(searchText.value));
    this.setState({ movies: filteredMovies });
  }

  onSelectedGenreChange() {
    const { movies, selectedGenre } = this.state;
    let filteredMovies = movies;
    if (selectedGenre !== '') { // If selectedGenre = '' (means ALL), no movie is filtered.
      filteredMovies = movies.filter((ele) => ele.genre === selectedGenre);
    }
    this.setState({
      movies: filteredMovies,
    });
  }

  onBookmarkedChange(event) {
    const { movies } = this.props; // Array de filmes originais
    let filteredMovies = movies;
    if (event.target.checked) {
      filteredMovies = movies.filter((ele) => ele.bookmarked);
    }
    this.setState({
      movies: filteredMovies, // Atualiza a lista de filmes
      bookmarkedOnly: event.target.checked, // Muda a propriedade bookmarkedOnly para o valor da checkbox
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};

export default MovieLibrary;
