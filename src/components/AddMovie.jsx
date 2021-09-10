import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = { title: '', subtitle: '', imagePath: '', storyline: '', rating: 0 };
  }

  handleTitleChange = ({ target }) => this.setState({ title: target.value });;

  handleSubtitleChange = ({ target }) => this.setState({ subtitle: target.value });

  handleImageChange = ({ target }) => this.setState({ imagePath: target.value });

  handleStorylineChange = ({ target }) => this.setState({ storyline: target.value });

  handleRatingChange = ({ target }) => this.setState({ rating: target.value });

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;

    return (
      <form data-testid="add-movie-form" className="add-movie">
        <Label
          name="Título"
          id="title"
          type="text"
          state={ title }
          funcName={ this.handleTitleChange }
        />
        <Label
          name="Subtítulo"
          id="subtitle"
          type="text"
          state={ subtitle }
          funcName={ this.handleSubtitleChange }
        />
        <Label
          name="Imagem"
          id="image"
          type="text"
          state={ imagePath }
          funcName={ this.handleImageChange }
        />
        <label htmlFor="storylineInput" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storylineInput"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleStorylineChange }
          />
        </label>
        <Label
          name="Avaliação"
          id="rating"
          type="number"
          state={ rating }
          funcName={ this.handleRatingChange }
        />
        <button type="submit" onClick={ onClick }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
