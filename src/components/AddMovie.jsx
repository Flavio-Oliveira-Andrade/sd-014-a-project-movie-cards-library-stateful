// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="text-input" data-testid="title-input-label">
          Título
          <input
            id="text-input"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ title }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
