// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';
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

  onSearchTextChange = (event) => {
    const { filmes } = this.props;
    const { searchText } = this.state;
    this.setState({ [event.target.name]: event.target.value });
    return this.setState({
      movies: filmes.filter((element) => element.title.includes(searchText)),
    });
  }

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

  render() {
    const { movies: filmes } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this;

    return (
      <>
        <SearchBar
          func={ { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } }
          estados={ { searchText, bookmarkedOnly, selectedGenre } }
        />
        { filmes.map((element) => <MovieCard movie={ element } key={ element.title } />) }
        <AddMovie />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  filmes: PropTypes.shape([]),
}.isRequired;

export default MovieLibrary;
