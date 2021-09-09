import React from 'react';

class AddMovie extends React.Component {
  // subtitle: '';
  // title: '';
  // imagePath: '';
  // storyline: '';
  // rating: 0;
  // genre: 'action'

  render() {
    <AddMovie onClick={ () => {} } />;
    return (
      <form data-testid='add-movie-form'>
        <label htmlFor='titleLabel' data-testid='title-input-label'>
          Título:
          <input
            type='text'
            value={ title }
            onChange={ this.state.title }
            data-testid='title-input'
          />
        </label>
        <label htmlFor='subtitleLabel' data-testid='subtitle-input-label'>
          Subtítulo:
          <input
            type='text'
            value={ subtitle }
            onChange={ this.state.subtitle }
            data-testid='subtitle-input'
          />
        </label>
        <label htmlFor='imgLabel' data-testid='image-input-label'>
          Imagem
          <input
            type='text'
            value={ imagePath }
            onChange={ this.state.imagePath }
            data-testid='image-input'
          />
        </label>
        <label htmlFor='storylineLabel' data-testid='storyline-input-label'>
          Sinopse
          <textarea
            data-testid='storyline-input'
            value={ this.state.storyline }
            onChange={ this.state }
          />
        </label>
        <label htmlFor='ratingLabel' data-testid='rating-input-label'>
          Avaliação
          <input
            type='number'
            value={ this.state.rating }
            onChange={ this.state }
            data-testid='rating-input'
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
