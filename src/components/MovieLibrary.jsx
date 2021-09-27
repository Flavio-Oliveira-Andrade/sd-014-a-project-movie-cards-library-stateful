import React from 'react';
import AddMovie from './AddMovie';
// import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props)

      const { movies } = props;

      this.state = {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies: movies,
      }

      this.searchChange = this.searchChange.bind(this);
  }

  searchChange({target}) {
    const value = target.type === 'checkbox'
    ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <>
        <SearchBar 
          searchText= { searchText } 
          bookmarkedOnly={ bookmarkedOnly } 
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.searchChange }
          onBookmarkedChange={ this.searchChange }
          onSelectedGenreChange={ this.searchChange }
        />
        <MovieList movies={ movies }/>
        <AddMovie />
      </>
    );
  }
}

export default MovieLibrary;
