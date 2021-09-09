// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <main>
        <input type="text" />
        <form data-testid="search-bar-form" />
      </main>
    );
  }
}

export default SearchBar;
