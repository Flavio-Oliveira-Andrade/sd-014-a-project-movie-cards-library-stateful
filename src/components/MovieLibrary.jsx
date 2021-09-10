import React from 'react';
import propTypes from 'prop-types';

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
      movies: props.movies,
    };
  }
}

handleChange(event); {
  const { name, value } = event.target;
  this.setState({ [name]: value });
}

render(); {
  const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
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
    </main>
  );
}

export default MovieLibrary;
