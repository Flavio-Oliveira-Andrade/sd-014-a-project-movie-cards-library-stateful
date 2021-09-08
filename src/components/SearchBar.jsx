import React, { Component } from 'react';
import CheckboxInputS from './CheckboxInputS';
import TextInputS from './TextInputS';

class SearchBar extends Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <TextInputS />
        <CheckboxInputS />
      </form>
    );
  }
}

export default SearchBar;
