import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddMovie extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   };
  // }

  renderTitle() {
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          type="text"
        />
      </label>
    );
  }

  renderSubtitle() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
        />
      </label>
    );
  }

  renderImage() {
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input data-testid="image-input" type="text" />
      </label>
    );
  }

  renderStoryline() {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <input
          data-testid="storyline-input"
          type="text"
        />
      </label>
    );
  }

  renderRating() {
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          defaultValue={ 0 }
        />
      </label>
    );
  }

  renderGenre() {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select data-testid="genre-input">
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.renderTitle()}
          {this.renderSubtitle()}
          {this.renderImage()}
          {this.renderStoryline()}
          {this.renderRating()}
          {this.renderGenre()}
          <button
            type="submit"
            onClick={ onClick }
            data-testid="send-button"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
