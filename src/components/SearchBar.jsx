// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchBar extends Component {
	render() {
		const { 
			searchText, 
			onSearchTextChange, 
			bookmarkedOnly,
			onBookmarkedChange,
			selectedGenre,
			onSelectedGenreChange
		} = this.props

		return (
			<form data-testid="search-bar-form" >
				<label data-testid="text-input-label" htmlFor="">
					Inclui o texto: 
					<input  onChange={ onSearchTextChange } 
					value={ searchText }
					type="text"
					data-testid="text-input" />
				</label>
			</form>
		)
	}
}

SearchBar.propTypes = { 
	searchText: PropTypes.string,
	onSearchTextChange: PropTypes.func,
	bookmarkedOnly: PropTypes.bool,
	onBookmarkedChange: PropTypes.func,
	selectedGenre: PropTypes.string,
	onSelectedGenreChange: PropTypes.func,
}

export default SearchBar;