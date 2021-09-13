import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import lista from '../data';

let filterFavorit;
let filterGenre;
class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      mov: { titulo: '', subtitulo: '', imagem: '', sinopse: '', nota: 0, genero: '' },
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.clicked = this.clicked.bind(this);
    this.searching = this.searching.bind(this);
    this.bookmarking = this.bookmarking.bind(this);
    this.genre = this.genre.bind(this);
    this.changeText = this.changeText.bind(this);
    // this.filtroA = this.filtroA.bind(this);
  }

  // filtroA(atual){
  //   const {title,subtitle,storyline,searchText} = this.state;
  //   atual[title].includes(searchText) === true
  //   || atual[subtitle].includes(searchText) === true
  //   || atual[storyline].includes(searchText) === true;
  // }

  changeText(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  clicked(e) {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    e.preventDefault();
    lista.push({
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    });
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    // console.log(this.state);
  }

  searching(e) {
    this.setState({ searchText: e.target.value });
  }

  bookmarking() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      this.setState({ bookmarkedOnly: false });
    } else {
      this.setState({ bookmarkedOnly: true });
    }
  }

  genre(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  render() {
    const { searchText,
      bookmarkedOnly,
      selectedGenre,
      mov,
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre } = this.state;
    const { movies } = this.props;
    const titleFilter = movies.filter((atual) => atual.title.includes(searchText) === true
      || atual.subtitle.includes(searchText) === true
      || atual.storyline.includes(searchText) === true);
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
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searching }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarking }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.genre }
        />
        <MovieList movies={ filterGenre } />
        <AddMovie
          onClick={ this.clicked }
          newMovie={ mov }
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          rating={ rating }
          genre={ genre }
          change={ this.changeText }
        />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
