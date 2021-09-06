import React, { Component } from 'react'

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies
    }
  }
  render() {
    return (
      <main>
        
      </main>
    )
  }
}
