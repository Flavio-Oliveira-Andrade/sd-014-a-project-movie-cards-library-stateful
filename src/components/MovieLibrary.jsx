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
    const { name, type, checked, value } = event.target;
    const filter = movies.filter(({ title, subtitle, storyline , genre}) => title.includes(value)
      || subtitle.includes(value) || storyline.includes(value) || genre === value);
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
      movies: filter,
    });
    if (type === 'checkbox') {
      this.setState({
        movies: checked ? movies.filter(({ bookmarked }) => bookmarked) : movies,
      });
    }
}

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />

        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;
