// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      rating: 0,
      imagePath: '',
      storyline: '',
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ event }) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  criarInputPadrao = (typeIn, nameIn, valueIn, dataIn) => (
    <input
      type={ typeIn }
      name={ nameIn }
      value={ valueIn }
      data-testid={ dataIn }
      onChange={ this.handleChange }
    />
  )

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="texto" data-testid="title-input-label">
          Título
          { this.createInput('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.createInput('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { this.createInput('number', 'rating', rating, 'rating-inputl') }
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          { this.createInput('text', 'image', imagePath, 'image-inputl') }
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          { this.createInput('textarea', 'storyline', storyline, 'storyline-inputl') }
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="submit" onClick={ onClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
