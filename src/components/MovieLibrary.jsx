// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
      newCards: [],
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    const { newCards } = this.state;
    const { value } = target; // value do html atualiza antes do state (que é async);
    const allMovies = [...movies, ...newCards];
    const titleContains = allMovies.filter((el) => el.title.includes(value)
        || el.subtitle.includes(value)
        || el.storyline.includes(value));
    this.setState({
      searchText: value,
      movies: titleContains,
    });
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    const { newCards } = this.state;
    const { checked } = target;
    const allMovies = [...movies, ...newCards];
    const favorited = allMovies.filter((el) => el.bookmarked === true);
    this.setState({
      movies: (checked === true ? favorited : allMovies),
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    const { newCards } = this.state;
    const { value } = target;
    const allMovies = [...movies, ...newCards];
    const filtered = allMovies.filter((el) => el.genre === value);
    this.setState({
      selectedGenre: value,
      movies: (value !== '' ? [...filtered] : allMovies), // string vazia === 'Todos'
    });
  }

  newMovie(newCard) {
    const { movies } = this.props;
    const { newCards } = this.state;
    const allNewCards = [...newCards, newCard];
    this.setState({
      newCards: allNewCards,
      movies: [...movies, ...allNewCards],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <nav>
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.onSearchTextChange }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ this.onBookmarkedChange }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.onSelectedGenreChange }
          />
        </nav>
        <section>
          <MovieList movies={ movies } />
        </section>
        <section>
          <AddMovie onClick={ this.newMovie } />
        </section>
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
