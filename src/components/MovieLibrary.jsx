// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
	constructor() { 
		const { movies } = this.props
		super();
		this.state = { 
			searchText: '',
			bookmarkedOnly: false,
			selectedGenre: '',
			movies: movies,
		}
	}
	render() { 
		const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
		return ( 
			<SearchBar 
			searchText={ searchText }
			
			/>
		)
	}
}

export default MovieLibrary;
