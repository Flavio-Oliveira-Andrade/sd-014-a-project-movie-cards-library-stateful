import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange = (event) => {
    const { movies } = this.props;
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      movies: movies.filter(
        ({ title, subtitle, storyline, genre }) => title.includes(value)
          || subtitle.includes(value) || storyline.includes(value) || genre === value,
      ),
    });
  }

  handleBookmarkChange = (event) => {
    const { movies } = this.props;
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
      movies: checked ? movies.filter(({ bookmarked }) => bookmarked) : movies,
    });
  }

  handleClick = (newMovie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />

        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

export default MovieLibrary;
