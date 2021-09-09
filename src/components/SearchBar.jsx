import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <section>
        <form action="" data-testid="search-bar-form">
          <label htmlFor="search" data-test-id="text-input-label">
            Inclui o texto:
            <input
              type="text"
              id="search"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: null,
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
};

export default SearchBar;
