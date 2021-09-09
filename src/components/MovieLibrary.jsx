// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
	constructor(props) { 
		super(props);
		this.state = { 
			searchText: '',
			bookmarkedOnly: false,
			selectedGenre: '',
			movies: this.props.movies,
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange({ target }) { 
		const { name, type, checked } = target;
		const value = type === "checkbox" ? checked: target.value
		this.setState({ 
			[name]: value
		});
	}

	filterMovies(arrayMovies, search) { 
		return arrayMovies
		.filter((movie) => movie.title.includes(search.searchText));
	}

	render() { 
		const { movies } =this.props;
		const { searchText, bookmarkedOnly, selectedGenre } = this.state;
		return ( 
		<section>
			<SearchBar 
			searchText={ searchText }
			onChangeGeneric={ this.handleChange }
			bookmarkedOnly={ bookmarkedOnly }
			selectedGenre={ selectedGenre }
			/>
			<MovieList movies={this.filterMovies(movies, this.state)} />
		</section>
		)
	}
}

export default MovieLibrary;
