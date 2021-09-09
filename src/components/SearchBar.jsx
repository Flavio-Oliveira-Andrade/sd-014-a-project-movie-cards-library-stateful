import React from 'react';
import PropTypes from 'prop-types';
import CustomControl from './CustomControl';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <CustomControl
          name="text"
          type="text"
          labelText="Inclui o texto:"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <CustomControl
          name="checkbox"
          type="checkbox"
          labelText="Mostrar somente favoritos:"
          value={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        <CustomControl
          name="select"
          type="select"
          labelText="Filtrar por gênero"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          options={ {
            Todos: '',
            Ação: 'action',
            Comédia: 'comedy',
            Suspense: 'thriller',
          } }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
