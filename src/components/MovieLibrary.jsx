import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      mov: {titulo: '', subtitulo: '', imagem: '', sinopse: '', nota: 0, genero: ''},
      title: ''
    };
    this.clicked = this.clicked.bind(this);
    this.searching = this.searching.bind(this);
    this.bookmarking = this.bookmarking.bind(this);
    this.genre = this.genre.bind(this);
    this.changeText = this.changeText.bind(this)
  }
  changeText(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  clicked(e) {
    e.preventDefault();
    console.log(AddMovie);
  }

  searching(e) {
    this.setState({ searchText: e.target.value });
  }

  bookmarking() {
    if (this.state.bookmarkedOnly === true) {
      this.setState({ bookmarkedOnly: false });
    } else {
      this.setState({ bookmarkedOnly: true });
    }
  }

  genre(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, mov, title} = this.state;
    const { movies } = this.props;
    const titleFilter = movies.filter((cur) => cur.title.includes(searchText) === true || cur.subtitle.includes(searchText) === true || cur.storyline.includes(searchText) === true);
    let filterFavorit;
    let filterGenre;
    if (bookmarkedOnly === true) {
      filterFavorit = titleFilter.filter((cur) => cur.bookmarked === true);
    } else {
      filterFavorit = titleFilter;
    }
    if (selectedGenre === '') {
      filterGenre = filterFavorit;
    } else {
      filterGenre = filterFavorit.filter((cur) => cur.genre === selectedGenre);
    }
    return (
      <>
        <SearchBar searchText={ searchText } onSearchTextChange={ this.searching } bookmarkedOnly={ bookmarkedOnly } onBookmarkedChange={ this.bookmarking } selectedGenre={ selectedGenre } onSelectedGenreChange={ this.genre } />
        <MovieList movies={ filterGenre } />
        <AddMovie onClick={ this.clicked } newMovie={ mov } title={title} change={this.changeText}/>
        {console.log(this.state.title)}
      </>
    );
  }
}

export default MovieLibrary;
