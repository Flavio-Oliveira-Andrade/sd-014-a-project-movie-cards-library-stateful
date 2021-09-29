// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import react from 'react';

class MovieLibrary extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookedmarkedOnly,
      selectedGenre,
      onSelectedGenre
    } = this.props;
    return()
  }
}