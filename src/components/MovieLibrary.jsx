// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import movies from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange = (event) => this.setState({
    [event.target.name]: event.target.value,
  });

  onBookmarkedChange = () => this.setState(() => {
    const { bookmarkedOnly } = this.state;
    console.log(this);
    if (bookmarkedOnly === false) {
      return { bookmarkedOnly: true };
    }
    return { bookmarkedOnly: false };
  })

  onSelectedGenreChange = (event) => this.setState({
    selectedGenre: event.target.value,
  });

  handdleClick = () => {
    // const { onClick } = this.props;
  }

  render() {
    const { movies: filmes } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      handdleClick,
    } = this;
    const filmesFiltrados = filmes
      .filter((element) => element.title.includes(searchText))
      .filter((element) => element.genre.includes(selectedGenre));

    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ onSearchTextChange }
          onBookmarkedChange={ onBookmarkedChange }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ filmesFiltrados } />
        <AddMovie onClick={ handdleClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  filmes: PropTypes.shape([]),
}.isRequired;

export default MovieLibrary;
