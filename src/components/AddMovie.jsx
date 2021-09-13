// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => this.setState({
    [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
  });

  // input customizado para cada label
  input(name, type, value, dataTestId) {
    return (
      <input
        name={ name }
        type={ type }
        value={ value }
        data-testid={ dataTestId }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    // desestrutura o estado inicial de "this.state"
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          {/* carrega os componentes de input ao label */}
          { this.input('title', 'text', title, 'title-input') }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.input('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          {this.input('imagePath', 'text', imagePath, 'image-input')}
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { this.input('rating', 'number', rating, 'rating-input') }
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
