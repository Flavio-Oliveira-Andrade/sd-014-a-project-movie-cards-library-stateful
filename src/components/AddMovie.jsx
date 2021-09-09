import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.funcInputGenerator = this.funcInputGenerator.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  funcInputGenerator(nomeRef, textLabel, keyState) {
    return (
      <label htmlFor={ nomeRef } data-testid={ `${nomeRef}-input-label` }>
        {textLabel}
        <input
          type="text"
          name={ nomeRef }
          data-testid={ `${nomeRef}-input` }
          value={ keyState }
          onChange={ this.handleInput }
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.funcInputGenerator('title', 'Título', title)}
        {this.funcInputGenerator('subtitle', 'Subtítulo', subtitle)}
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleInput }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

// agradecimento especial ao Jonathan, Hector e Danilo pela ajuda a fazer a função de desistruturação!!!
