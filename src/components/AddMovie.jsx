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
    this.state = this.initialState;
    // this.textInput = this.textInput.bind(this);
    // this.subtitleInput = this.subtitleInput.bind(this);
    // this.imageInput = this.imageInput.bind(this);
    // this.textAreaInput = this.textAreaInput.bind(this);
    // this.clickButton = this.clickButton.bind(this);
  }

  textInput = () => (
    <input
      id="text-input"
      type="text"
      data-testid="title-input"
      value={ title }
      onChange={ title }
    />
  );

  subtitleInput = () => (
    <input
      type="text"
      value={ subtitle }
      data-testid="subtitle-input"
      onChange={ subtitle }
      id="subtitle-input"
    />
  );

  imageInput = () => (
    <input
      type="text"
      data-testid="image-input"
      onChange={ imagePath }
      id="image-input"
    />
  );

  textAreaInput = () => (
    <textarea
      id="textarea"
      value={ storyline }
      onChance={ storyline }
      data-testid="storyline-input"
      rows="4"
      cols="50"
    />
  );

  clickButton(event) {
    // https://pt-br.reactjs.org/docs/handling-events.html
    const { onClick } = this.props;

    event.preventDefault();
    onClick(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { rating, genre } = this.state;
    // subtitle, title, imagePath, storyline,
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="text-input" data-testid="title-input-label">
          Título
          {this.textInput()}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          {this.subtitleInput()}
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          {this.imageInput()}
        </label>
        <label htmlFor="textarea" data-testid="storyline-input-label">
          Sinopse
          {this.textAreaInput()}
        </label>
        <label htmlFor="number" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="number"
            value={ rating }
            onChange={ rating }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="select" data-testid="genre-input-label">
          Gênero
          <select id="select-genre" value={ genre }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          onClick={ clickButton }
          type="submit"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
