import React from 'react';
// import MovieList from './MovieList';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: null,
      // selectedGenre: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(checked) {
    this.setState({ bookmarkedOnly: checked.target.checked });
  }

  render() {
    const { searchText } = this.state;
    const { bookmarkedOnly } = this.state;
    // const { selectedGenre } = this.state;
    return (
      <section className="searchBar">
        <form id="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto
            <input
              type="text"
              name="text"
              value={ searchText }
              data-testid="text-input"
              onChange={ this.onSearchTextChange }
            />
          </label>
          <label data-test-id="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              name="checkbox-input"
              value={ bookmarkedOnly }
              id="checkbok-input"
              onChange={ this.onBookmarkedChange }
            />
          </label>
        </form>
      </section>
    );
  }
}

export default SearchBar;
