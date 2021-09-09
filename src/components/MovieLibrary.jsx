import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

// my man Henrique Jensen gave me a great tip on this: Instead of keeping the filtering logic within the functions, it would be best to put it all inside the render(). Why? Because in there it will make sure that everytime *anything* on the screen changes it will run render() again and ensure that every filter will be updated, so I won't be needing to have each filter call each other so that their own filters aren't mutually exclusive. Fuckin' A - that's brilliant.
