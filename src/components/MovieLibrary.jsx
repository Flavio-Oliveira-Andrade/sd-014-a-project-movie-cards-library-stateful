import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const value = (event.target.type === 'checkbox' ? event
      .target.checked : event.target.value);
    this.setState({
      [name]: value,
    });
  }

  onSearchTextChange(event) {
    const { movies } = this.props;
    const { searchText } = this.state;
    this.handleChange(event);
    this.setState({
      movies: movies.filter((filme) => filme.title.toLowerCase()
        .includes(searchText) || filme.storyline.includes(searchText)),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
