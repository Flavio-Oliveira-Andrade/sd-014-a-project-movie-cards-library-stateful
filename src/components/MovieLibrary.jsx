import React from 'react';
import Proptypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
    this.onSearchTextChange = this.handleChange.bind(this);
    this.onBookmarkedChange = this.handleChange.bind(this);
    this.onSelectedGenreChange = this.handleChange.bind(this);
  }

  handleChange({ target }) { // gerencia as alterações dentro da SearchBar.
    this.setState({
      [target.name]: (target.type === checkbox ? target.checked : target.value) }); // de acordo com o nome do campo selecionado, faz a alteração de seu conteúdo.
  } // Caso seja uma checkbox, altera o atributo checked, caso não seja, altera para o valor selecionado/digitado.

  movieFilter = ({ searchText, selectedGenre, bookmarkedOnly, movies }) => movies
    .filter((movie) => movie.title.includes(searchText))
    .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
    .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true));

  clickHandler(movie) { // gerencia o evento onClick.
    this.setState(({ movies }) => ({ // faz a alteração do objeto movies, recebido via prop, para incrementar o array existente com o novo filme.
      movies: [...movies, movie],
    }));
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ this.movieFilter(this.state) } />
        <AddMovie onClick={ this.clickHandler } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default MovieLibrary;
