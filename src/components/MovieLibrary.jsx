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
      movies: [...movies], // Array que contem os filmes a serem impressos baseados na busca atual
      allMovies: [...movies], // Array que contem TODOS os filmes da bibliotca (Proviente do Data.js e todos os adicionados pelo usuario)
    };
    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  onClick(movie) {
    const { allMovies } = this.state;
    console.log('teste');
    this.setState(() => ({
      allMovies: [...allMovies, movie],
      movies: [...allMovies, movie],
    }));
  }

  onSearchTextChange(event) {
    const { searchText } = this.state;
    const { allMovies } = this.state;
    this.setState({ searchText: event.target.value });
    const filteredMovies = allMovies.filter((ele) => ele.title.includes(searchText)
    || ele.subtitle.includes(searchText) || ele.storyline.includes(searchText));
    this.setState({ movies: filteredMovies });
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
    const { allMovies } = this.state;
    let filteredMovies = allMovies;
    if (event.target.value !== '') { // If selectedGenre is different from '' (means ALL), the allMovies array is filtered to form movies.
      filteredMovies = allMovies.filter((ele) => ele.genre === event.target.value);
    }
    this.setState({
      movies: filteredMovies,
    });
  }

  onBookmarkedChange(event) {
    const { allMovies } = this.state; // Array de filmes originais
    let filteredMovies = allMovies;
    if (event.target.checked) { // If bookmarkedOnly is now checked, filter the allMovies array to form the movies array (containing only bookmarked films)
      filteredMovies = allMovies.filter((ele) => ele.bookmarked);
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
    filter: PropTypes.func,
  }).isRequired,
};

export default MovieLibrary;
