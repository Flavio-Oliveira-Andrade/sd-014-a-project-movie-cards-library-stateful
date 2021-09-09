// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    // <MovieLibrary /> deve receber como props:
    const { movies } = this.props;
    // 16 - Configure o estado inicial do componente MovieLibrary
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const valor = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: valor,
    });
  }

  render() {
    return (
      <div>
        <AddMovie />
        <SearchBar
          searchText={ searchText }
          onSelectedGenreChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ this.handleChange }
        />
        <MovieList />
      </div>
    );
  }
}

export default MovieLibrary;
