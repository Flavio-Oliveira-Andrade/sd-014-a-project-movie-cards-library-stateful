// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    const { movie } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
      movies: movie,
    };
  }

  render() {
    return (
      <>
        <SearchBar />
        <AddMovie />
      </>
    );
  }
}
MovieLibrary.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
