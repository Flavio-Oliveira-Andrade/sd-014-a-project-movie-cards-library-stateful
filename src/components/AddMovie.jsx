import React, { Component } from 'react';

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
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="titulo"
            id="titulo"
            value={ title }
            data-testid="title-input"
            onChange={ handleChangeTitle }
          />
        </label>

        <label htmlFor="subtitulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitulo"
            id="subtitulo"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChangeSubtitle }
          />
        </label>
      </form>

    );
  }
}

export default AddMovie;
