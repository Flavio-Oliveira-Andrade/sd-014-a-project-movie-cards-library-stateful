import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="search">
            Pesquisar
            <input type="text" name="search" id="search" />
          </label>
        </form>
      </section>
    );
  }
}

export default SearchBar;

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 08/09/2021
 */
