// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  onSearchTextChange = (event) => this.setState({ searchText: event.target.value })

  onBookmarkedChange = (event) => {
    if (this.bookmarkedOnly === false) {
      this.setState({ bookmarkedOnly: true });
    } else {
      this.setState({ bookmarkedOnly: false });
      console.log(event.target.value)
    }
  }

  render() {
    const { searchText, bookmarkedOnly } = this.state;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="true">
          Inclui o texto:
          <input
            data-testid="text-input"
            value={ searchText }
            type="text"
            onChange={ this.onSearchTextChange }
          />
          <input
            data-testid="checkbox-input"
            type="checkbox"
            value={ bookmarkedOnly }
            onClick={ this.onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
