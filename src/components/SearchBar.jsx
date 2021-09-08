// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    //   1. Crie um componente chamado SearchBar
    const { onSelectedGenreChange, selectedGenre, onBookmarkedChange,
      bookmarkedOnly, onSearchTextChange, searchText } = this.props;
    //   Esse formulário deve apresentar o atributo data-testid="search-bar-form"
    return (

      <form data-testid="search-bar-form">
        {/* 3 - Renderize um input do tipo texto dentro do formulário em <SearchBar /> */}
        <label htmlFor="change" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            value={ searchText }
            id="change"
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        {/* 4 - Renderize um input do tipo checkbox dentro do form em <SearchBar /> */}
        <label htmlFor="check" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="check"
            value={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
          />
        </label>
        {/* 5 - Renderize um select dentro do formulário em <SearchBar /> */}
        <label htmlFor="select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>

    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequerid;

export default SearchBar;
