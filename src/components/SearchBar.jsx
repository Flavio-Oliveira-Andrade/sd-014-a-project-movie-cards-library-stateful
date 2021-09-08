import React, { Component } from 'react';
import CheckboxInputS from './CheckboxInputS';
import SelectS from './SelectS';
import TextInputS from './TextInputS';

class SearchBar extends Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <TextInputS />
        <CheckboxInputS />
        <SelectS />
      </form>
    );
  }
}

export default SearchBar;
