import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

const applyFilter = (array, { content, marked, type }) => {
  let result = array;
  if (content) {
    result = result.filter(
      ({ title, subtitle, storyline }) => title.toLowerCase().includes(content)
          || subtitle.toLowerCase().includes(content)
          || storyline.toLowerCase().includes(content),
    );
  }
  if (marked) {
    result = result.filter(({ bookmarked }) => bookmarked);
  }
  if (type) {
    result = result.filter(({ genre }) => genre === type);
  }
  return result;
};

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '', // guarda o texto de busca por filmes;
      bookmarkedOnly: false, // um boolean que guarda se é para filtrar por filmes favoritados ou não;
      selectedGenre: '', // guarda o gênero do filme selecionado para poder fazer a filtragem;
      movies, // guarda a lista de filmes
    };

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onClick(state) {
    console.log(`App: ${Object.entries(state)}`);
    const { movies } = this.state;
    console.table(movies);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { movies } = this.props;
    const { bookmarkedOnly, selectedGenre } = this.state;
    const search = value.toLowerCase();
    const filtered = applyFilter(movies,
      { content: search, marked: bookmarkedOnly, type: selectedGenre });
    // console.table(filtered);
    this.setState({
      searchText: value,
      movies: filtered,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { movies } = this.props;
    const { searchText, selectedGenre } = this.state;
    const filtered = applyFilter(movies,
      { content: searchText, marked: checked, type: selectedGenre });
    // console.table(filtered);
    this.setState({
      bookmarkedOnly: checked,
      movies: filtered,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { movies } = this.props;
    const { searchText, bookmarkedOnly } = this.state;
    const filtered = applyFilter(movies,
      { content: searchText, marked: bookmarkedOnly, type: value });
    // console.table(filtered);
    this.setState({
      selectedGenre: value,
      movies: filtered,
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.onClick }
        />
      </div>
    );
  }
}

MovieLibrary.defaultProps = {
  movies: [{}],
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieLibrary;
