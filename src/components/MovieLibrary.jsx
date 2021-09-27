import React from 'react';
import AddMovie from './AddMovie';
// import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props)

      const { movies } = props;

      this.state = {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies: movies,
      }

      this.searchChange = this.searchChange.bind(this);
      this.btnAddChange = this.btnAddChange.bind(this);
      this.moviesFilter = this.moviesFilter.bind(this);
  }

  searchChange({target}) {
    const value = target.type === 'checkbox'
    ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  btnAddChange(stateAdd) {
   this.setState(({ movies }) => ({
      movies: [...movies, stateAdd],
   }))
  }

  moviesFilter({ movies, searchText, bookmarkedOnly, selectedGenre }) {
    let filtrado;
    
    filtrado = movies.filter((filme) => {
      return filme.title.includes(searchText)
      || filme.subtitle.includes(searchText)
      || filme.storyline.includes(searchText);
    })
    if (bookmarkedOnly) {
      filtrado = filtrado.filter((filmes) => filmes.bookmarked)
    } 
    filtrado = filtrado.filter((filmeS) => {
      return filmeS.genre.includes(selectedGenre);
    })
    return filtrado;
  }


  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <>
        <SearchBar 
          searchText= { searchText } 
          bookmarkedOnly={ bookmarkedOnly } 
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.searchChange }
          onBookmarkedChange={ this.searchChange }
          onSelectedGenreChange={ this.searchChange }
        />
        <MovieList movies={ this.moviesFilter(this.state) } /> 
        <AddMovie onClick= { this.btnAddChange }/>
      </>
    );
  }
}

export default MovieLibrary;
