import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return movies.filter(({ title, subtitle, storyline, bookmarked, genre }) => {
      const searchFlag = `${title} ${subtitle} ${storyline}`.includes(searchText);
      const bookmarkFlag = (!bookmarkedOnly || bookmarked);
      const genreFlag = (genre === (selectedGenre || genre));
      return searchFlag && bookmarkFlag && genreFlag;
    });
  }

  addNewMovie({ title, subtitle, imagePath, storyline, rating, genre }) {
    this.setState((actualState) => ({
      movies: actualState.movies.concat([{
        title,
        subtitle,
        storyline,
        rating,
        imagePath,
        bookmarked: false,
        genre,
      }]),
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies() } />

        <AddMovie onClick={ this.addNewMovie } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,

};

export default MovieLibrary;
