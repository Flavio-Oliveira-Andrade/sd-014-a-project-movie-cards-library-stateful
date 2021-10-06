// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';

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
      </form>
    );
  }
}

export default AddMovie;
