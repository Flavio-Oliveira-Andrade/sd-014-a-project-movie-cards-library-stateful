// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data'

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
		this.addMovie = this.addMovie.bind(this);
	}

	handleChange({ target }) { 
		const { name, type, checked } = target;
		const value = type === "checkbox" ? checked: target.value
		this.setState({ 
			[name]: value
		});
	}

	searchGeneric( valueSearch, movie ) { 
	if (movie.title.includes(valueSearch )){ 
		return movie;
	} else if (movie.subtitle.includes(valueSearch)){ 
		return movie;
	} else if ( movie.storyline.includes(valueSearch)){
		return movie;
	} else { 
		return '';
		}
	}

	filterMovies(arrayMovies, search) { 
		const { searchText, bookmarkedOnly, selectedGenre } = search
		return arrayMovies
		.filter((movie) => bookmarkedOnly === true ? movie.bookmarked : movie)
		.filter((movie) => selectedGenre === '' ? 
		movie: selectedGenre === movie.genre)
		.filter((movie) => this.searchGeneric(searchText, movie))
	}
	addMovie(newMovie) { 
		const { subtitle, title, imagePath, storyline, rating, genre } = newMovie;
		movies.push(newMovie);
		console.log(movies);
	}	
	render() { 
		const { movies }=this.props;
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
			<AddMovie addMovie={ this.addMovie }/>
		</section>
		)
	}
}

export default MovieLibrary;
