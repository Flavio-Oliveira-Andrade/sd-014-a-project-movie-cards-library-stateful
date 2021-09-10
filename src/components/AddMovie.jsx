import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    // Requisito 06
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges = (event) => {
    this.setState({ title: event.target.value });
  }

  // Criador dinamico de Input com label:
  inputCreator(text, name, type, value) {
    return (
      <label htmlFor={ `addmovie-${type}` } data-testid={ `${name}-input-label` }>
        { text }
        <input
          type={ type }
          name={ name }
          data-testid={ `${name}-input` }
          id={ `addmovie-${type}` }
          value={ value }
          onChange={ this.handleChanges }
        />
      </label>
    );
  }

  render() {
    // Resolve => Must use destructuring state assignment [ERRO Linter]
    const { title } = this.state;
    return (
      // Renderizando um formulario (Requisito 07)
      <form data-testid="add-movie-form">
        {/* Adicianando um input do tipo Text (Requisito 08) */}
        {this.inputCreator('Título', 'title', 'text', title)}

      </form>
    );
  }
}

export default AddMovie;
