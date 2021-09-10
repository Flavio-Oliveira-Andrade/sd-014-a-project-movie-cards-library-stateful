// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      //ryan, boladasso, boladinho, boladao
    }
    this.oshiroDoMalText = this.oshiroDoMalText.bind(this);
    this.filterChanges = this.filterChanges.bind(this);
  }

  oshiroDoMalText({ target }){
    const { name } = target;
    const oshiro = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: oshiro
    })
  }

  
  
  filterChanges({movies, bookmarkedOnly, selectedGenre, searchText}){
    const oshiroDoBem = movies.filter((movie)=>{
     const textFiltered = `${movie.title} ${movie.subtitle} ${movie.storyline}`

    return textFiltered.includes(searchText);

    })

    if(bookmarkedOnly) {
      return oshiroDoBem.filter((movie)=> movie.bookmarked);
    }

    if(selectedGenre) {
      return oshiroDoBem.filter(({genre})=> genre === selectedGenre);
    };

    return oshiroDoBem;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
          searchText={ searchText }
          onSearchTextChange={ this.oshiroDoMalText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.oshiroDoMalText }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.oshiroDoMalText }
         />
        <MovieList movies={ this.filterChanges(this.state) }  />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
