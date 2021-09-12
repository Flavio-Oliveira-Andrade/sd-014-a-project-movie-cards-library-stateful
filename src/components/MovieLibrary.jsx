import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Meus Imports:
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <div>
        {/* Requisito 01 ao 05 */}
        <SearchBar />
        {/* Requisito 06 ao 14 */}
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
