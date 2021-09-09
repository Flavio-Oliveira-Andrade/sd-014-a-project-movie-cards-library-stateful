// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    const { movie } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.handleChanonSearchTextChangege.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const value = name.type === 'checkbox' ? name.checked : name.value;
    this.setState({ [name]: value });
  }

  onBookmarkedChange(event) {
    const { movies } = this.props;
    if (event.target.checked) {
      this.setState({ movies: movies.filter((movie) => movie.bookmarked) });
    } else {
      this.setState({ movies });
    }
    this.handleChange(event);
  }

  onSelectedGenreChange(event) {
    const { movies } = this.props;
    if (event.target.value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter((movie) => movie.genre === event.target.value),
      });
    }
    this.handleChange(event);
  }

  onSearchTextChange(event) {
    const { movies } = this.props;
    if (event.target.value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter(({ title, subtitle, storyline }) => {
          const content = `${title}, ${subtitle}, ${storyline}`;
          return content.includes(event.target.value);
        }),
      });
    }
    this.handleChange(event);
  }

  addMovie(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <nav>
          <SearchBar
            data-testid="search-bar-form"
            searchText={ searchText }
            onSearchTextChange={ this.onSearchTextChange }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ this.onBookmarkedChange }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.onSelectedGenreChange }
          />
          <br />
          <AddMovie onClick={ this.addMovie } />
        </nav>
        <MovieList movies={ movies } />
      </div>);
  }
}
export default MovieLibrary;
