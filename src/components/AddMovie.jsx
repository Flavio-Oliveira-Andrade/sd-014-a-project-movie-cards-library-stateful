/* eslint-disable jsx-a11y/label-has-associated-control */
// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handdleClick = this.handdleClick.bind(this);
    this.makeInput = this.makeInput.bind(this);
    this.haddleChange = this.haddleChange.bind(this);
  }

  handdleClick(event) {
    event.preventDefault();
    // const { onClick } = this.props;
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  haddleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  makeInput(type, idtest, valor, nome) {
    return (
      <input
        type={ type }
        data-testeid={ idtest }
        defaultValue={ valor }
        name={ nome }
        onChange={ this.haddleChange }
      />
    );
  } // Ideia da função para incluir inputs foi discutida com o meu colega de turma Thiago Oshiro.

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          { this.makeInput('text', 'title-input', title, 'title') }
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          { this.makeInput('text', 'subtitle-input', subtitle, 'subtitle') }
        </label>
        <label data-testid="image-input-label">
          Imagem
          { this.makeInput('text', 'image-input', imagePath, 'imagePath') }
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          { this.makeInput('text-area', 'storyline-input', storyline, 'storyline')}
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          { this.makeInput('number', 'rating-input', rating, 'rating') }
        </label>
        <label data-testid="genre-input-label">Gênero</label>
        <select
          name="genre"
          data-testid="genre-input"
          defaultValue={ genre }
          onChange={ this.haddleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        <button type="submit" data-testid="send-button" onClick="">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
