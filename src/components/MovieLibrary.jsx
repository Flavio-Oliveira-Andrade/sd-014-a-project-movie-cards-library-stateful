import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  handleChange(event, callback) {
    const { name } = event.target;
    const value = (event.target.type === 'checkbox' ? event
      .target.checked : event.target.value);
    this.setState({
      [name]: value,
    }, callback);
  }

  onSearchTextChange(event) {
    this.handleChange(event, () => {
      const { movies } = this.props;
      const { searchText } = this.state;
      console.log(searchText);
      this.setState({
        movies: movies.filter((filme) => filme.title.toLowerCase()
          .includes(searchText.toLowerCase()) || filme.storyline.toLowerCase()
          .includes(searchText.toLowerCase()) || filme.subtitle.toLowerCase()
          .includes(searchText.toLowerCase())),
      });
    });
  }

  onBookmarkedChange(event) {
    this.handleChange(event, () => {
      const { movies } = this.props;
      const { bookmarkedOnly } = this.state;
      if (bookmarkedOnly === true) {
        this.setState({
          movies: movies.filter((filme) => filme.bookmarked === bookmarkedOnly),
        });
      } else {
        this.setState({
          movies,
        });
      }
    });
  }

  onSelectedGenreChange(event) {
    this.handleChange(event, () => {
      const { movies } = this.props;
      const { selectedGenre } = this.state;
      if (selectedGenre === '') {
        this.setState({
          movies,
        });
      } else {
        this.setState({
          movies: movies.filter((filme) => filme.genre === selectedGenre),
        });
      }
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
