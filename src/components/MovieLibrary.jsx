// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) { // props sempre devem ser passados p constructor e p React.Component por meio do método super(). Source: https://www.w3schools.com/react/react_props.asp
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this); // para que o this possa ser visto fora da func render (p funções terem acesso ao this e ao estado)
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = { // criando o estado inicial por meio da atribuição de um objeto à chave `state` do `this`
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  // funções que redefinem o estado ao receber novas entradas:
  onSearchTextChange({ target }) { // destructuring de event.target
    this.setState({ // método assíncrono que define o novo estado para o que é passado como argumento
      searchText: target.value, // captura a entrada digitada no input do form
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  // onClick(movie) {
  //   this.setState((previousState) => ({
  //     movies: [...previousState.movies, movie],
  //   }));
  // }

  // onClick(movie) {
  //   this.setState(({ movies }) => ({
  //     movies: [...movies, movie],
  //   }));
  // }

  onClick(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar // de acordo com as props recebidas no requisito 1 e declaradas no componente SearchBar
          searchText={ searchText } // passando o valor para a propriedade; {} pois pega o valor de uma variável
          onSearchTextChange={ this.onSearchTextChange } // como as funções estão dentro da classe, preciso usar o 'this'
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

// validação das props passadas no componente
MovieLibrary.propTypes = {
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
