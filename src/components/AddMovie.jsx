import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    const { title, subtitle, imagePath } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            value={ title }
            data-testid="title-input"
            onChange={ title }
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ subtitle }
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
            value={ imagePath }
            data-testid="image-input"
            onChange={ imagePath }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
