// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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
    const { searchText } = this.state;
    const { movies } = this.props;
    const newMovies = movies.filter((item) => (
      item.title.includes(searchText)
      || item.subtitle.includes(searchText)
      || item.storyline.includes(searchText)));
    this.setState({
      searchText: value,
      movies: newMovies,
    });
  }

  onBookmarkedChange = ({ target }) => {
    const { checked } = target;
    const { movies } = this.props;
    const newMovies = checked
      ? movies.filter((item) => item.bookmarked === checked)
      : movies;
    this.setState({
      bookmarkedOnly: checked,
      movies: newMovies,
    });
  }

  onSelectedGenreChange = ({ target }) => {
    const { value } = target;
    const { movies } = this.props;
    this.setState({
      selectedGenre: value,
      movies: movies.filter((e) => e.genre === value),
    });
  }

  onClick = (state) => {
    // console.log(this.state.movies.concat(state));
    const newState = state;
    const { movies } = this.state;
    newState.rating = parseFloat(newState.rating);
    this.setState(() => ({
      movies: [...movies, newState],
    }));
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
        <AddMovie onClick={ this.onClick } />
      </>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
