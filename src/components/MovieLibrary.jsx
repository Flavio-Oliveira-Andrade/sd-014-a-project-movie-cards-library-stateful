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
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.submitMovie = this.submitMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  submitMovie = (film) => {
    const { movies } = this.state;
    const movieParsed = film;
    movieParsed.rating = parseFloat(film.rating);
    this.setState({ movies: [...movies, movieParsed] });
  }

  // movieParsed exists because, for some reason, if I don't do this then the rating inside the new movie will be passed as a string and not a number. The evaluator doesn't really care, but it is still an error, so it seems prudent to just parse it to a float just in case.
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    const filmsTextFilter = movies.filter(({ title, subtitle, storyline }) => (
      title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText)
    ));

    const filmsBookmarkFilter = bookmarkedOnly
      ? filmsTextFilter.filter((film) => film.bookmarked)
      : filmsTextFilter;

    const filmsGenreFilter = selectedGenre.includes('', 'Todos')
      ? filmsBookmarkFilter.filter((film) => film.genre.includes(selectedGenre))
      : filmsBookmarkFilter;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filmsGenreFilter } />
        <AddMovie onClick={ this.submitMovie } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

// my man Henrique Jensen gave me a great tip on this: Instead of keeping the filtering logic within the functions, it would be best to put it all inside the render(). Why? Because in there it will make sure that everytime *anything* on the screen changes it will run render() again and ensure that every filter will be updated, so I won't be needing to have each filter call each other so that their own filters aren't mutually exclusive. Fuckin' A - that's brilliant.
