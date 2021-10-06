// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';

class AddMovie extends React.Componet {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <form className="add-movie-form" data-testid="add-movie-form">
        <AddMovieTitle value={ title } handleChange={ this.handleChange } />
        <AddMovieSubtitle value={ subtitle } handleChange={ this.handleChange } />
        <AddMovieImage value={ imagePath } handleChange={ this.handleChange } />
        <AddMovieStoryline value={ storyline } handleChange={ this.handleChange } />
        <AddMovieRating value={ rating } handleChange={ this.handleChange } />
        <AddMovieGenre value={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
