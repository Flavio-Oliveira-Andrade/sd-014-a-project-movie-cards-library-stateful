import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      onSearchTextChange: this.changeSearchText,
      bookmarkedOnly: true,
      onBookmarkedChange: this.favorito,
      selectedGenre: '',
      // onSelectedGenreChange: maisCallBack(),
    }
    this.changeSearchText = this.changeSearchText.bind(this)

  }
  changeSearchText(event){
    this.setState({
      searchText: event.target.value
    })
  }
  favorito(){
    console.log('favorito')
  }
  render() {

    // const {data-testeid} = this.props
    const {searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre} = this.state

    return ( 
      <form data-testid="search-bar-form"> 
        <fieldset>
          <label htmlFor="texto" data-testid="text-input-label" data-testid="text-input-label">Inclui o texto:</label>
          <input type="text" value={searchText} onChange={this.changeSearchText} data-testid="text-input"/>
          <label htmlFor="checkbox" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input type="checkBox" name="checkbox" id="checkbox" data-testid="checkbox-input" checked={bookmarkedOnly} onChange={this.favorito} />
        </fieldset>
      </form>
     );
  }
}

export default SearchBar;