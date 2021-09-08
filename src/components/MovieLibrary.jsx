// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './components/AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <AddMovie />
        <SearchBar />

      </div>

    );
  }
}
