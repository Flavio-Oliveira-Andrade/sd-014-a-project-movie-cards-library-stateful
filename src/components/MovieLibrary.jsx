// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  onSearchTextChange(e) {
    const { movies } = this.props;
    const { searchText } = this.state;
    const titleContains = movies.filter((el) => el.title.includes(searchText)
    || el.subtitle.includes(searchText)
     || el.storyline.includes(searchText));
    this.setState({
      searchText: e.target.value,
      movies: [...titleContains],
    });
  }

  onBookmarkedChange(e) {
    const { movies } = this.props;
    const bookmark = e.target.checked;
    const favorited = movies.filter((el) => el.bookmarked === true);
    this.setState({
      movies: (bookmark === true ? [...favorited] : [...movies]),
      bookmarkedOnly: bookmark,
    });
  }

  onSelectedGenreChange(e) {
    const { value } = e.target;
    const { movies } = this.props;
    const filtered = movies.filter((el) => el.genre === value);
    this.setState({
      selectedGenre: value,
      movies: value !== '' ? [...filtered] : [...movies],
    });
  }

  newMovie(state) {
    const { movies } = this.props;
    this.setState(() => ({
      movies: [...movies, state],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.newMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
