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
				<label htmlFor="">
					Inclui o texto: 
					<input type="text" />
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