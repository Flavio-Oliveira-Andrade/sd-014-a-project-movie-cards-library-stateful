// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

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

  handdleClick = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({ movies: prevState.movies.push(event.target.value) }));
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      handdleClick,
    } = this;

    const filmesFiltrados = movies
      .filter((element) => element.title.includes(searchText)
      || element.subtitle.includes(searchText) || element.storyline.includes(searchText))
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
