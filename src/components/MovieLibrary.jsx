import React from 'react';

class MovieLibrary extends React.Component {
  constructor() {
    const { movies } = this.props;
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }
  render() {
    const { movies } = this.props;
    return (
      <div>aa</div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
