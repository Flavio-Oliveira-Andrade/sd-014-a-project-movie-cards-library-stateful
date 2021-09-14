import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputText: '',
      inputCheckboxFavorites: false,
      selectGenre: '',
    };
  }

  handleChange({ target }) { // desestruturação do event para não precisar escrever event.target
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; // necessário para conseguir pegar o valor do checkbox, se for checkbox pega o checked e se não for pega o value
    this.setState({ [name]: value }); // interpolando o valor da variável para ser o nome da chave do objeto
  }

  handleClick() {

  }

  render() {
    const { inputText, inputCheckboxFavorites, selectGenre } = this.state;
    const { movies } = this.props;
    return (
      <main>
        <SearchBar
          searchText={ inputText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ inputCheckboxFavorites }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
