// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import data from '../data';

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

  onSearchTextChange = ({ target }) => {
    const { value } = target;
    const newMovies = data.filter((item) => (
      item.title.toLocaleLowerCase().includes(value.toLowerCase())));
    this.setState({
      searchText: value,
      movies: newMovies,

    });
  }

  onBookmarkedChange = ({ target }) => {
    const { checked } = target;
    const newMovies = checked
      ? data.filter((item) => item.bookmarked === checked)
      : data;
    this.setState({
      bookmarkedOnly: checked,
      movies: newMovies,
    });
  }

  onSelectedGenreChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    this.setState({
      selectedGenre: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
