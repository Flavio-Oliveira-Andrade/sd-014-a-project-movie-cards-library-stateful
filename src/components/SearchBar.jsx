import React from 'react';
// import MovieList from './MovieList';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      // bookmarkedOnly: null,
      // selectedGenre: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    const { searchText } = this.state;
    // const { bookmarkedOnly } = this.state;
    // const { selectedGenre } = this.state;
    return (
      <section className="searchBar">
        <form id="search-bar-form">
          <label htmlFor="text-input">
            Inclui o texto
            <input
              type="text"
              name="text"
              value={ searchText }
              id="text-input"
              onChange={ this.onSearchTextChange }
            />
          </label>
        </form>
      </section>
    );
  }
}

export default SearchBar;
