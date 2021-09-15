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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.filter = this.filter.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  filter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return movies
      .filter((movie) => (movie.title.includes(searchText)
        || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText)))
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
      .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        
        <SearchBar
          searchText={ searchText }
          onSelectedGenreChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ this.handleChange }
        />
        <MovieList movies={ this.filter() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
export default MovieLibrary;
