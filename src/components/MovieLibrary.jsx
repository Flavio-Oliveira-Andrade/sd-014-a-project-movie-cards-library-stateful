import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Meus Imports:
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies, // Nao precisa do this neste caso
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value, checked } = target;
    this.setState({
      [name]: name !== 'checkbox' ? (value) : (checked),
    });
  }

  render() {
    const {
      movies,
      searchText,
      bookmarkedOnly,
      selectedGenre } = this.state;
    console.log(movies);
    return (
      <div>
        {/* Requisito 01 ao 05 */}
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        {/* Requisito 06 ao 14 */}
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
