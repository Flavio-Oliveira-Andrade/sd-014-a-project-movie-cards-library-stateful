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
    }
  }
  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="" data-testid="title-input-label">
          Título
          <input type="text" data-testid="title-input"/>
          </label>
      </form>
    )
  }
}

export default AddMovie;
