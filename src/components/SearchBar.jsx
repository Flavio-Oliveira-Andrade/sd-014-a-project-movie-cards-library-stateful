// implement SearchBar component here
import React from "react";
import Proptypes from 'prop-types';


class SearchBar extends React.Component {
    render() {
        return (
            <form data-testid="search-bar-form">
                <label 
                htmlFor="inputSearch" data-testid="text-input-label">
                    Inclui o texto:
                    <input 
                    type='text'  
                    id='inputSearch'
                    data-testid="text-input" 
                    onChange={ this.onSearchTextChange } />
                </label>
                <label 
                htmlFor="inputCheckSearch"
                data-testid="checkbox-input-label">
                    Mostrar somente favoritos
                    <input 
                    type="checkbox" 
                    id='inputCheckSearch'
                    checked={ this.bookmarkedOnly }
                    onChange={ this.onBookmarkedChange }
                    data-testid="checkbox-input"/>
                </label>
                <label 
                htmlFor="selectSearch"
                data-testid="select-input-label">
                    Filtrar por gênero
                    <select 
                    name="" 
                    id="selectSearch" 
                    onChange={ this.onSelectedGenreChange }
                    data-testid="select-input">
                    <option 
                    value="" data-testid="select-option">Todos</option>
                    <option 
                    value="action" data-testid="select-option">Ação</option>
                    <option 
                    value="comedy" data-testid="select-option">Comédia</option>
                    <option 
                    value="thriller" data-testid="select-option">Suspense</option>
                    </select>
                </label>
                    
                
            </form>
        );
    }
}

SearchBar.propTypes = {
    searchText: Proptypes.string,
    onSearchTextChange: Proptypes.func,
    bookmarkedOnly: Proptypes.bool,
    onBookmarkedChange: Proptypes.func,
    selectedGenre: Proptypes.string,
    onSelectedGenreChange: Proptypes.func,
};
  

export default SearchBar;