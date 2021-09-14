// implement MovieLibrary component  here
import React from 'react'
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    const { movies } = this.props;
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies,
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState(({ movies }) => ({
      movies: [...movies, event],
    }))
  }

  render () {
    return (
    <>
      <AddMovie onClick={this.onClick}/>      
    </>
    )
    
  }
}

export default MovieLibrary;
