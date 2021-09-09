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
      onSelectedGenreChange: this.genero.bind(this),
    };
  }

  changeSearchText(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  favorito() {
    if (this.state.bookmarkedOnly === true) {
      this.setState({ bookmarkedOnly: false });
    } else {
      this.setState({ bookmarkedOnly: true });
    }
  }

  genero(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    // const {search} = this.props
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    // const {searchText} = this.props

    // const {data-testeid} = this.props

    return (
      <form data-testid="search-bar-form">
        <fieldset>
          <label htmlFor="texto" data-testid="text-input-label">Inclui o texto:</label>
          <input type="text" value={ searchText } onChange={ onSearchTextChange } data-testid="text-input" />
          <label htmlFor="checkbox" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input type="checkBox" name="checkbox" id="checkbox" data-testid="checkbox-input" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
          <label htmlFor="genero" data-testid="select-input-label">Filtrar por gênero</label>
          <select name="genero" id="genero" value={ selectedGenre } onChange={ onSelectedGenreChange } data-testid="select-input">
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
          {console.log(this.props)}
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
