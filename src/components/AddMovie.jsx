import React from 'react';

class AddMovie extends React.Component {
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
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title-input"
            type="text"
            data-testid="title-input"
            onChange={ title }
          />
          { title }
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle-input"
            type="text"
            data-testid="subtitle-input"
            onChange={ subtitle }
          />
          {subtitle}
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            name="image-input"
            type="text"
            data-testid="image-input"
            onChange={ imagePath }
          />
          { imagePath }
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline-input"
            data-testid="storyline-input"
            onChange={ storyline }
          />
          { storyline }
        </label>
      </form>
    );
  }
}

export default AddMovie;
