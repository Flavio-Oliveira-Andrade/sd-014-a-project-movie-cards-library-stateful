import React from 'react';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';
import AddMovieBtn from './AddMovieBtn';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle />
        <AddMovieSubtitle />
        <AddMovieImage />
        <AddMovieStoryline />
        <AddMovieRating />
        <AddMovieGenre />
        <AddMovieBtn />
      </form>
    );
  }
}

export default AddMovie;
