// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

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
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
  }

  handleSearchTextChange({ target }) {
    const { movies } = this.state;
    const { value } = target;
    this.setState({
      searchText: value,
      movies: movies.filter(({ title, subtitle, storyline }) => title.includes(value)
      || subtitle.includes(value) || storyline.includes(value)),
    });
  }

  handleBookmarkedChange({ target }) {
    const { movies } = this.state;
    const { checked } = target;
    if (!checked) {
      this.setState({
        bookmarkedOnly: checked,
        movies: movies.filter(({ bookmarked }) => bookmarked),
      });
    } else {
      this.setState({
        bookmarkedOnly: checked,
        movies,
      });
    }
  }

  handleSelectedGenreChange({ target }) {
    const { movies } = this.state;
    const { value } = target;

    this.setState({
      selectedGenre: value,
      movies: movies.filter(({ genre }) => genre.includes(value)),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.handleBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleSelectedGenreChange }
      />
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
