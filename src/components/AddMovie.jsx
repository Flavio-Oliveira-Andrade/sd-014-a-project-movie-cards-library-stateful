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

  makeOptions(valor, text) {
    return (
      <>
        <option
          className="inputs"
          value={ valor[0] }
          data-testid="genre-option"
        >
          { text[0] }
        </option>
        <option
          className="inputs"
          value={ valor[1] }
          data-testid="genre-option"
        >
          { text[1] }
        </option>
        <option
          className="inputs"
          value={ valor[2] }
          data-testid="genre-option"
        >
          { text[2] }
        </option>
      </>
    );
  }

  makeInput(type, idtest, valor, nome) {
    return (
      <input
        className="inputs"
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
        <label data-testid="title-input-label" htmlFor="inputs">
          Título
          { this.makeInput('text', 'title-input', title, 'title') }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="inputs">
          Subtítulo
          { this.makeInput('text', 'subtitle-input', subtitle, 'subtitle') }
        </label>
        <label data-testid="image-input-label" htmlFor="inputs">
          Imagem
          { this.makeInput('text', 'image-input', imagePath, 'imagePath') }
        </label>
        <label data-testid="storyline-input-label" htmlFor="inputs">
          Sinopse
          { this.makeInput('text-area', 'storyline-input', storyline, 'storyline')}
        </label>
        <label data-testid="rating-input-label" htmlFor="inputs">
          Avaliação
          { this.makeInput('number', 'rating-input', rating, 'rating') }
        </label>
        <label data-testid="genre-input-label" htmlFor="inputs">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            defaultValue={ genre }
            onChange={ this.haddleChange }
          >
            { this.makeOptions(
              ['action', 'comedy', 'thriller'], ['Ação', 'Comédia', 'Suspense'],
            )}
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick="">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
