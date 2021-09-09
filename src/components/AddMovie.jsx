import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = { title: '', subtitle: '', imagePath: '', storyline: '' };
  }

  handleTitleChange = ({ target }) => this.setState({ title: target.value });;

  handleSubtitleChange = ({ target }) => this.setState({ subtitle: target.value });

  handleImageChange = ({ target }) => this.setState({ imagePath: target.value });

  handleStorylineChange = ({ target }) => this.setState({ storyline: target.value });

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleInput" data-testid="title-input-label">
          Título
          <input
            id="titleInput"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleTitleChange }
          />
        </label>
        <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitleInput"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleSubtitleChange }
          />
        </label>
        <label htmlFor="imageInput" data-testid="image-input-label">
          Imagem
          <input
            id="imageInput"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleImageChange }
          />
        </label>
        <label htmlFor="storylineInput" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storylineInput"
            type="text"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleStorylineChange }
          />
        </label>
        <button type="submit" onClick={ onClick }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
