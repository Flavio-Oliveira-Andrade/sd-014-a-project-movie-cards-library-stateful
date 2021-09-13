import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handelChange = this.handelChange.bind(this);
    // this.onClick = this.onClick.bind(this);
  }

  // onClick(state) {
  //   const { movies } = this.state;
  //   movies.push(state);
  //   this.setState({
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   });
  // }

  handelChange(event) {
    this.setState({
      [event.target.name]: event.target.type === 'checkbox'
        ? event.target.checked : event.target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handelChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handelChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handelChange }
        />
        <MovieList
          movies={ movies }
          searchText={ searchText }
          selectedGenre={ selectedGenre }
          bookmarkedOnly={ bookmarkedOnly }
        />
        <AddMovie movies={ movies } onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieLibrary;
