import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
  }

  handleChance({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return movies.filter((movie) => movie.title.toLowerCase().icludes(searchText)
    || movie.subtitle.toLowerCase().includes(searchText)
    || movie.storyLine.toLowerCase().includes(searchText))
      .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : movie))
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : movie));
  }

  render() {
    // Desestruturando o state
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <main>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <AddMovie movies={ this.handleFilter } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
