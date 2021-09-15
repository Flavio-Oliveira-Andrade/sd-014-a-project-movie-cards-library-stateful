import React from 'react';

class MovieLibrary extends Reac.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  render() {
    return (
      <form>
        <label htmlFor="searchText">
          Search:
          <input
            type="text"
            id="searchText"
            name="searchText"
          />
        </label>

        <label htmlFor="bookMark">
          Book:
          <input
            type="text"
            id="bookMark"
            name="bookMarkOnly"
          />
        </label>

        <label htmlFor="select">
          Select Genre:
          <input
            type="select"
            id="select"
            name="selectGenre"
          />
        </label>
      </form>
    );
  }
}

export default MovieLibrary;
