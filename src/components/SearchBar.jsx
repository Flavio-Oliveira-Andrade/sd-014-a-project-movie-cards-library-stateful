import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="search" data-testid="text-input-label">
            Inclui o texto:
            <input type="text" name="search" id="search" value={ searchText } />
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 08/09/2021
 */
