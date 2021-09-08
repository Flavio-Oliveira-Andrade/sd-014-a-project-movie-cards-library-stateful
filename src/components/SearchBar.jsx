import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      onSearchTextChange: this.changeSearchText.bind(this),
      bookmarkedOnly: true,
      onBookmarkedChange: this.favorito.bind(this),
      selectedGenre: '',
      onSelectedGenreChange: this.genero.bind(this)
    };
    
  }

  changeSearchText(event){
    this.setState({
      searchText: event.target.value
    })
  }
  favorito(){
    if(this.state.bookmarkedOnly === true){
      this.state.bookmarkedOnly = false;
    } else {
      this.state.bookmarkedOnly = true;
    }
  }
  genero(){
    console.log('genero')
  }

  render() {

    // const {data-testeid} = this.props
    const {searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.state

    return ( 
      <form data-testid="search-bar-form"> 
        <fieldset>
          <label htmlFor="texto" data-testid="text-input-label" data-testid="text-input-label">Inclui o texto:</label>
          <input type="text" value={searchText} onChange={onSearchTextChange} data-testid="text-input"/>
          <label htmlFor="checkbox" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input type="checkBox" name="checkbox" id="checkbox" data-testid="checkbox-input" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          <label htmlFor="genero" data-testid="select-input-label">Filtrar por gênero</label>
          <select name="genero" id="genero" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            {console.log(this.state )}
          </select>
        </fieldset>
      </form>
     );
  }
}

export default SearchBar;