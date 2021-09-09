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
      genre: 'action',
    };
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  funcInputGenerator(nomeRef, textLabel, keyState, typeRef) {
    return (
      <label htmlFor={ nomeRef } data-testid={ `${nomeRef}-input-label` }>
        {textLabel}
        <input
          type={ typeRef }
          name={ nomeRef }
          data-testid={ `${nomeRef}-input` }
          value={ keyState }
          onChange={ this.handleInput }
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.funcInputGenerator('title', 'Título', title, 'text')}
        {this.funcInputGenerator('subtitle', 'Subtítulo', subtitle, 'text')}
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
        {this.funcInputGenerator('rating', 'Avaliação', rating, 'number')}
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleInput }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;

// agradecimento especial ao Jonathan, Hector e Danilo pela ajuda a fazer a função de desistruturação!!!
