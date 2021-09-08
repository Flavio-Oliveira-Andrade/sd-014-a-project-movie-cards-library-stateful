// Implement MovieLibrary component here.
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  //  https://overreacted.io/pt-br/why-do-we-write-super-props/
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      inicialData: movies,
    };

    this.aST = this.aST.bind(this);
    this.aBO = this.aBO.bind(this);
    this.aSG = this.aSG.bind(this);
    this.add = this.add.bind(this);
    this.filtraTexto = this.filtraTexto.bind(this);
    this.filtraFavorito = this.filtraFavorito.bind(this);
    this.filtraGenero = this.filtraGenero.bind(this);
  }

  filtraTexto(filt) {
    const { inicialData } = this.state;
    const filmes = inicialData.filter((mov) => {
      const tlc = mov.title.toLowerCase();
      const slc = mov.subtitle.toLowerCase();
      const sllc = mov.storyline.toLowerCase();
      filt = filt.toLowerCase();

      if (tlc.includes(filt) || slc.includes(filt) || sllc.includes(filt)) return mov;
      return false;
    });
    this.setState({
      movies: filmes,
    });
  }

  filtraFavorito(filt) {
    const { inicialData } = this.state;
    let filmes;
    if (filt) {
      filmes = inicialData.filter((mov) => mov.bookmarked === filt);
    } else {
      filmes = inicialData;
    }
    this.setState({
      movies: filmes,
    });
  }

  filtraGenero(filt) {
    const { inicialData } = this.state;
    let filmes;
    if (filt === '') {
      filmes = inicialData;
    } else {
      filmes = inicialData.filter((mov) => mov.genre === filt);
    }
    this.setState({ movies: filmes });
  }

  aST({ target }) {
    this.setState({
      searchText: target.value,
    });
    this.filtraTexto(target.value);
  }

  aBO({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
    this.filtraFavorito(target.checked);
  }

  aSG({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
    this.filtraGenero(target.value);
  }

  add(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  /*  add(newMovie) {
    this.setState(function(estadoAtual){
      estadoAtual.movies.push(newMovie);
      return {
        movies: estadoAtual.movies,
      };
    });
  } */

  render() {
    const { searchText: s, bookmarkedOnly: b } = this.state;
    const { selectedGenre: g, movies: m } = this.state;

    return (
      <>
        <SearchBar
          searchText={ s }
          bookmarkedOnly={ b }
          selectedGenre={ g }
          onSearchTextChange={ this.aST }
          onBookmarkedChange={ this.aBO }
          onSelectedGenreChange={ this.aSG }
        />
        <MovieList movies={ m } />
        <AddMovie onClick={ this.add } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
