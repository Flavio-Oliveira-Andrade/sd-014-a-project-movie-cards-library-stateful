import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(movie) { // Função para adicionar um novo filme à lista!
    this.setState(({ movies }) => ({ // Atualiza o estado do componente (e desestrutura a chave "movies")
      movies: [...movies, movie], // Adiciona as informações do novo filme à lista de filmes já existente (atenção para o spread operator!!!)
    }));
  }

  handleChange({ target }) {
    return this.setState({
      [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
    });
  }

  filterMovies({ searchText, bookmarkedOnly, movies, selectedGenre }) {
    const filteredMovies = movies.filter(
      (movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText),
    );
    if (bookmarkedOnly === true) {
      return filteredMovies.filter((movie) => movie.bookmarked);
    } if (selectedGenre !== '') {
      return filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }
    return filteredMovies;
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies(this.state) } />
        <AddMovie onClick={ this.handleClick } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
