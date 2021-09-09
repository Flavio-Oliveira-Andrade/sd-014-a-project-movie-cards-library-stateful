import React from 'react';
// import PropTypes from 'prop-types';

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
    this.handleChange = this.handleChange.bind(this);
    this.funcInputCreator = this.funcInputCreator.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  funcInputCreator(texto, stateName, stateValue, type) {
    return (
      <label htmlFor={ stateName } data-testid={ `${stateName}-input-label` }>
        {texto}
        <input
          id={ stateName }
          data-testid={ `${stateName}-input` }
          type={ type }
          onChange={ this.handleChange }
          value={ stateValue }
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.funcInputCreator('Título', 'title', title, 'text')}
          {this.funcInputCreator('Subtítulo', 'subtitle', subtitle, 'text')}
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              id="imagePath"
              data-testid="image-input"
              type="text"
              onChange={ this.handleChange }
              value={ imagePath }
            />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="storyline"
              data-testid="storyline-input"
              onChange={ this.handleChange }
              value={ storyline }
            />
          </label>
          {this.funcInputCreator('Avaliação', 'rating', rating, 'number')}
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              id="genre"
              data-testid="genre-input"
              value={ genre }
              onChange={ this.handleChange }
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

// AddMovie.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default AddMovie;
