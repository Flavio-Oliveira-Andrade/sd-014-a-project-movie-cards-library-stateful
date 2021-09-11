import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sinop from './Sinop';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleStates = this.handleStates.bind(this);
    this.inputsAdd = this.inputsAdd.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleStates({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  reset() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputsAdd(inName, inType, inValue) {
    return (
      <input
        name={ inName }
        type={ inType }
        value={ inValue }
        data-testid={ inName === 'imagePath' ? 'image-input' : `${inName}-input` }
        onChange={ this.handleStates }
      />
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="cont" data-testid="title-input-label">
          Título
          { this.inputsAdd('title', 'text', title) }
        </label>
        <label htmlFor="cont" data-testid="subtitle-input-label">
          Subtítulo
          { this.inputsAdd('subtitle', 'text', subtitle) }
        </label>
        <label htmlFor="cont" data-testid="image-input-label">
          Imagem
          { this.inputsAdd('imagePath', 'text', imagePath) }
        </label>

        <Sinop value={ storyline } handleStates={ this.handleStates } />

        <label htmlFor="cont" data-testid="rating-input-label">
          Avaliação
          { this.inputsAdd('rating', 'number', rating) }
        </label>
        <label htmlFor="cont" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleStates }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="send-button"
          onClick={ () => { onClick(this.state); this.reset(); } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};
