import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    // Requisito 06
    this.state = {
      subtitle: '',
      title: '',
      image: '', // <=== mudei imagePath para image, caso de erro no futuro
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // Criador dinamico de Input com label:
  inputCreator(text, name, type, value) {
    return (
      <label htmlFor={ `add-${type}-${name}` } data-testid={ `${name}-input-label` }>
        { text }
        <input
          type={ type }
          name={ name } // <= Passar este parametro para handleChanges
          data-testid={ `${name}-input` }
          id={ `add-${type}-${name}` }
          value={ value } // <= Passar este parametro para handleChanges
          onChange={ this.handleChanges }
        />
      </label>
    );
  }

  render() {
    // Resolve => Must use destructuring state assignment [ERRO Linter]
    const { title, subtitle, image, storyline, rating } = this.state;
    return (
      // Renderizando um formulario (Requisito 07)
      <form data-testid="add-movie-form">
        {/* Requisito 08 */}
        {this.inputCreator('Título', 'title', 'text', title)}
        {/* Requisito 09 */}
        {this.inputCreator('Subtítulo', 'subtitle', 'text', subtitle)}
        {/* Requisito 10 */}
        {this.inputCreator('Imagem', 'image', 'text', image)}
        {/* Requisito 11 */}
        {this.inputCreator('Sinopse', 'storyline', 'text', storyline)}
        {/* Requisito 12 */}
        {this.inputCreator('Avaliação', 'rating', 'number', rating)}
      </form>
    );
  }
}

export default AddMovie;
