import React from 'react';
import PropTypes from 'prop-types';
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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.genericHandler = this.genericHandler.bind(this);
  }

  // genericHandler({ target }) {
  //   const { name } = target;
  //   const value = target.type === 'checked' ? target.checked : target.value;
  //   this.setState({ [name]: value });
  // }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { movies } = this.props;
    const textFilter = movies.filter(({ title, subtitle, storyline }) => (
      title.includes(value) || subtitle.includes(value) || storyline.includes(value)
    ));
    this.setState(
      { searchText: value, movies: textFilter },
    );
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          // onChange={ this.genericHandler }
        />
        <MovieList movies={ movies } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
