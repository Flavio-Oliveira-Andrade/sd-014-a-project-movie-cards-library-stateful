// implement SearchBar component here
// teste
import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './AddMovieComponents/TextInput';
import CheckboxInput from './AddMovieComponents/CheckboxInput';
import SelectInput from './AddMovieComponents/SelectInput';

class SearchBar extends React.Component {
  render() {
    const
      { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
        selectedGenre, onSelectedGenreChange } = this.props;
    const selectOptions = [
      ['', 'Todos'],
      ['action', 'Ação'],
      ['comedy', 'Comédia'],
      ['thriller', 'Suspense'],
    ];
    return (
      <form data-testid="search-bar-form">
        <TextInput
          lblName="Inclui o texto:"
          name="text"
          value={ searchText }
          cb={ onSearchTextChange }
        />
        <CheckboxInput
          lblName="Mostrar somente favoritos"
          name="checkbox"
          checked={ bookmarkedOnly }
          cb={ onBookmarkedChange }
        />
        <SelectInput
          lblName="Filtrar por gênero"
          name="select"
          value={ selectedGenre }
          cb={ onSelectedGenreChange }
          opt={ selectOptions }
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
