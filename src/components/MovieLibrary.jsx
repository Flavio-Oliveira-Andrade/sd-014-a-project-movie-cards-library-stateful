import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleMovieFilter = (Moviess) => {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let Movies = [...Moviess];
    if (searchText) {
      Movies = Moviess.filter((Movie) => Movie.title.includes(searchText)
      || Movie.subtitle.includes(searchText)
      || Movie.storyline.includes(searchText));
    }
    if (bookmarkedOnly) {
      Movies = Moviess.filter((Movie) => Movie.bookmarked === true);
    }
    if (selectedGenre) {
      Movies = Moviess.filter((Movie) => Movie.genre.includes(selectedGenre));
    }
    return Movies;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleAddMovie = (filmes) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, filmes],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.handleMovieFilter(movies) } />
        <AddMovie onClick={ this.handleAddMovie } />
      </main>
    );
  }
}

export default MovieLibrary;
