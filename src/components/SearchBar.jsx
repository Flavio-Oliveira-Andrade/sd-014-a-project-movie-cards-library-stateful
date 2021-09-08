import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      onSearchTextChange: callback(),
      bookmarkedOnly: true,
      onBookmarkedChange: outraCallback(),
      selectedGenre: '',
      onSelectedGenreChange: maisCallBack(),
    }
  }
  render() {
    return ( 
      <form>
        <fieldset>
          <label htmlFor="texto">Inclui o texto:</label>
        </fieldset>
      </form>
     );
  }
}

export default SearchBar;