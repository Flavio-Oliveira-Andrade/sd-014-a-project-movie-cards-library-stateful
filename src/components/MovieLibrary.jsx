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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) { // callback que atualiza o estado de SearchBar
    this.setState({
      [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
    }); // se for um checkbox, busca pelo atributo checked; senão, busca pelo valor digitado/selecionado
  }

  movieFilter = ({ searchText, bookmarkedOnly, selectedGenre, movies }) => movies
    .filter((movie) => movie
      .title.includes(searchText) || movie
      .subtitle.includes(searchText) || movie
      .storyline.includes(searchText))
    .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
    .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true));

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2>My Awesome Movie Cards Library</h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedOnly={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenre={ this.handleChange }
        />
        <MovieList movies={ this.movieFilter(this.state) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
