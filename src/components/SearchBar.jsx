// implement SearchBar component here
import React from 'react'

class SearchBar extends React.Component {
  constructor() {
    super();
    this.props = {
      searchText: "",
      onSearchTextChange: console.log(String("1234")),
      bookmarkedOnly: true,
      onBookmarkedChange: console.log(String("1234")),
      selectedGenre: "",
      onSelectedGenreChange: console.log(String("1234")),
    }
  }
  render() {
    return(
      <div>
        <form data-testid="search-bar-form">
          
        </form>
      </div>
    )
  }
}

export default SearchBar