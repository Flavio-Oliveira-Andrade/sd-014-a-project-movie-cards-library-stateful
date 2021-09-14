import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);
    this.handleSum = this.handleSum.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = (type === 'checkbox' ? target.checked : target.value);
    this.setState({
      [name]: value,
    });
  }

  handleSum(param) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, param] });
  }

  moviesFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const generalFilter = movies.filter(({ title, subtitle, storyline }) => (
      title.includes(searchText) || subtitle.includes(searchText)
      || storyline.includes(searchText)
    ));

    let copyFilter = generalFilter;
    if (bookmarkedOnly) {
      copyFilter = generalFilter.filter(({ bookmarked }) => bookmarked);
    }

    return !bookmarkedOnly ? generalFilter
      .filter(({ genre }) => genre.includes(selectedGenre))
      : copyFilter.filter(({ genre }) => genre.includes(selectedGenre));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { handleChange, moviesFilter, handleSum } = this;
    return (
      <div>
        <SearchBar
          onSearchTextChange={ handleChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ handleChange }
          onSelectedGenreChange={ handleChange }
        />
        <MovieList movies={ moviesFilter() } />
        <AddMovie onClick={ handleSum } />
      </div>
    );
  }
}

export default MovieLibrary;
