/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Input from './inputs/Input';
import InputCheckBox from './inputs/InputCheckBox';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          id={ `${'text'}` }
          value={ searchText }
          handleChange={ onSearchTextChange }
          titulo={ `${'Inclui o texto'}` }
        />
        <InputCheckBox
          id={ `${'checkbox'}` }
          value={ bookmarkedOnly }
          handleChange={ onBookmarkedChange }
          titulo={ `${' Mostrar somente favoritos'}` }
        />
        <label htmlFor="genero" className="label-block" data-testid="select-input-label">
          Filtrar por gênero
          <select
            className="form-control"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
            id="genero"
            name="genero"
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
