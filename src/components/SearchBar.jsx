import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
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
      <section>
        <form data-testid='search-bar-form'>
          <label data-testid='text-input-label' htmlFor='searchBar'>
            Inclui o texto
            <input
              data-testid='text-input'
              type='text'
              name='searchText'
              value={searchText}
              onChange={onSearchTextChange}
            />
            <label data-testid='checkbox-input-label' htmlFor='bookmarked'>
              Mostrar somente favoritos
              <input
                data-testid='checkbox-input'
                type='checkbox'
                name='bookmarkedOnly'
                checked={bookmarkedOnly}
                onChange={onBookmarkedChange}
              />
            </label>
            <label data-testid='select-input-label' htmlFor=''>
            Filtrar por gênero
              <select
                data-testid="select-input"
                name='selectedGenre'
                data-testid='select-input'
                value={selectedGenre}
                onChange={onSelectedGenreChange}
              >
                <option data-testid="select-option" value="">Todos</option>
                <option data-testid="select-option" value="action">Ação</option>
                <option data-testid="select-option" value="comedy">Comédia</option>
                <option data-testid="select-option" value="thriller">Suspense</option>
              </select>
            </label>
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired
}
