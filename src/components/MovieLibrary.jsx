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
      bookMarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.filterFilm = this.filterFilm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addFilm = this.addFilm.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const inputType = target.type === 'checkbox'
      ? target.checked : target.value;
    this.setState({
      [name]: inputType,
    });
  }

  filterFilm(filmes) {
    const { searchText, bookMarkedOnly, selectedGenre } = this.state;
    let filmesArray = [...filmes];

    if (searchText) {
      filmesArray = filmes.filter((movie) => movie.title
        .toLowerCase().includes(searchText)
    || movie.subtitle.toLowerCase().includes(searchText)
    || movie.storyline.toLowerCase().includes(searchText));
    }

    if (selectedGenre) {
      filmesArray = filmes.filter((genero) => genero.genre.includes(selectedGenre));
    }

    if (bookMarkedOnly) {
      filmesArray = filmes.filter((favoritos) => favoritos.bookmarked === true);
    }
    return filmesArray;
  } // Ajuda dos colegas!!

  addFilm(newFilm) {
    this.setState((estado) => ({
      movies: [...estado.movies, { ...newFilm, bookmarked: true }],
    }));
  }

  render() {
    const { searchText, bookMarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
          bookmarkedOnly={ bookMarkedOnly }
          onBookmarkedChange={ this.handleChange }
        />

        <MovieList movies={ this.filterFilm(movies) } />
        <AddMovie onClick={ this.addFilm } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
