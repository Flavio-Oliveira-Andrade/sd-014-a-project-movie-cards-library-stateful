import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.inputGenerator = this.inputGenerator.bind(this);
    this.textareaGenerator = this.textareaGenerator.bind(this);
  }

  // handle genérico utilizado para atualizar o estado de todos os componentes com a mesma lógica.

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault(); // Limpa comportamento padrão do submit
    const { onClick } = this.props;
    onClick(this.state);
    // Como o comportamento padrão do submit foi inibido, é necessário passar o this.setState para que fosse passado o estado inicial e "limpar" o form.
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputGenerator(type, name, value, data) {
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        data-testid={ data }
        onChange={ this.handleChange }
      />
    );
  }

  textareaGenerator(type, name, value, data) {
    return (
      <textarea
        type={ type }
        name={ name }
        value={ value }
        data-testid={ data }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state; // Desestrutura objeto state para não agarrar no lint. Aula 12.1 - min. 51;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          { this.inputGenerator('text', 'title', title, 'title-input') }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          { this.inputGenerator('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          { this.inputGenerator('text', 'imagePath', imagePath, 'image-input') }
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          { this.textareaGenerator('text', 'storyline', storyline, 'storyline-input') }
        </label>
        <label data-testid="rating-input-label" htmlFor="image-input">
          Avaliação
          { this.inputGenerator('number', 'rating', rating, 'rating-input') }
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            name="genre"
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
