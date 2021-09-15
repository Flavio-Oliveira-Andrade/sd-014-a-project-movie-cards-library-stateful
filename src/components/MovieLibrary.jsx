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

  onClick(movie) {
    const { movies } = this.state;
    console.log('teste');
    this.setState(() => ({ movies: [...movies, movie] }));
  }

  onSearchTextChange(event) {
    const { searchText } = this.state;
    const { movies } = this.props;
    this.setState({ searchText: event.target.value });
    let filteredMovies = movies;
    filteredMovies = movies.filter((ele) => ele.title.includes(searchText)
    || ele.subtitle.includes(searchText) || ele.storyline.includes(searchText));
    this.setState({ movies: filteredMovies });
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
    const { movies } = this.props;
    let filteredMovies = movies;
    if (event.target.value !== '') { // If selectedGenre = '' (means ALL), no movie is filtered.
      filteredMovies = movies.filter((ele) => ele.genre === event.target.value);
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
