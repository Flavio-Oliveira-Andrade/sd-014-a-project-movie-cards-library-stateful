// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
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

  handleChange = ({ target }) => {
    const { name } = target;

    this.setState({
      [name]: (target.type === 'checkbox' ? target.checked : target.value),
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
