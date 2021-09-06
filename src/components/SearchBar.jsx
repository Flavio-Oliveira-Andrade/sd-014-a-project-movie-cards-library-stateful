import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <section>
        <form data-testid='search-bar-form'>
          <label data-testid="text-input-label" htmlFor='searchBar'>
          Inclui o texto
            <input
              data-testid="text-input"
              type='text'
              name='searchText'
              value={searchText}
              onChange={onSearchTextChange}
              />
          </label>
        </form>
      </section>
    );
  }
}
