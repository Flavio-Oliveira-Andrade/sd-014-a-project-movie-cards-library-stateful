import React from 'react';
import propTypes from 'prop-types';

import searchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
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
