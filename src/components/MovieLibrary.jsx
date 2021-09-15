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
      movies,
    };

    this.handleClick = this.handleClick.bind(this);
    this.filmFilter = this.filmFilter.bind(this);
    this.addHandler = this.addHandler.bind(this);
  }

  handleClick({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filmFilter = ({ searchText, selectedGenre, bookmarkedOnly, movies }) => movies
    .filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText))
    .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
    .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true));

  addHandler(movie) {
    this.setState(({ movies }) => ({
      movies: [...movies, movie],
    }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={ this.searchText }
          onSearchTextChange={ this.handleClick }
          bookmarkedOnly={ this.bookmarkedOnly }
          onBookmarkedChange={ this.handleClick }
          selectedGenre={ this.selectedGenre }
          onSelectedGenreChange={ this.handleClick }
        />
        <MovieList movies={ this.filmFilter(this.state) } />
        <AddMovie onClick={ this.addHandler } />
      </div>
    );
  }
}

export default MovieLibrary;
