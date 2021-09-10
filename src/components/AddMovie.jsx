import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    // Requisito 06
    this.state = {
      // subtitle: '',
      // title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    return (
      // Renderizando um formulario (Requisito 07)
      <form data-testid="add-movie-form">
        <span>Teste</span>
      </form>
    );
  }
}

export default AddMovie;
