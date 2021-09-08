import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      onSearchTextChange: this.changeSearchText,
      bookmarkedOnly: true,
      // onBookmarkedChange: outraCallback(),
      selectedGenre: '',
      // onSelectedGenreChange: maisCallBack(),
    };
    this.changeSearchText = this.changeSearchText.bind(this);
  }

  changeSearchText(event) {
    this.setState({
      searchText: event.target.value,
    });
    console.log(this.state.searchText);
  }

  render() {
    // const {data-testeid} = this.props
    const { searchText, onSearchTextChange, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <form>
        <fieldset>
          <label htmlFor="texto" data-testid="text-input-label">Inclui o texto:</label>
          <input type="text" value={ searchText } onChange={ this.changeSearchText } />
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
