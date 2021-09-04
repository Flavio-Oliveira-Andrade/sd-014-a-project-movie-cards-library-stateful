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
        <label data-testid="text-input-label">
          Inclui o texto
          <input type="text" value={ searchText } name="texto" onChange={ onSearchTextChange } data-testid="text-input" />
        </label>
        {/* 4 - Renderize um input do tipo checkbox dentro do formulário em <SearchBar /> */}
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input type="checkbox" name="name" value={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input" checked={ bookmarkedOnly } />
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
