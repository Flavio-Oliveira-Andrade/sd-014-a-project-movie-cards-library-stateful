import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => this.setState({
    [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
  });

  generateInputTag(labelText, type, data, value) {
    return (
      <label htmlFor={ data } data-testid={ `${data}-input-label` }>
        { labelText }
        <input
          type={ type }
          value={ value }
          data-testid={ `${data}-input` }
          onChange={ this.handleChange }
          name={ data }
        />
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.generateInputTag('Título', 'text', 'title', title) }
        { this.generateInputTag('Subtítulo', 'text', 'subtitle', subtitle) }
        { this.generateInputTag('Imagem', 'text', 'image', imagePath) }

        <label htmlFor="rating" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="rating"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>

        { this.generateInputTag('Avaliação', 'number', 'rating', rating) }

        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            onChange={ this.handleChange }
            value={ genre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button
          data-testid="send-button"
          onClick={ onClick }
          type="button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
