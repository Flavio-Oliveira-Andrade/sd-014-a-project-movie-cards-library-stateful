// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  funcInput = (id, type, value, test) => (
    <input
      id={ id }
      type={ type }
      value={ value }
      onChange={ this.handleChange }
      data-testid={ test }
    />
  )

  resetState = (e) => {
    const { onClick } = this.props;
    e.preventDefault();
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          {this.funcInput('title', 'text', title, 'title-input')}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          {this.funcInput('subtitle', 'text', subtitle, 'subtitle-input')}
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          {this.funcInput('imagePath', 'text', imagePath, 'image-input')}
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            id="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          {this.funcInput('rating', 'number', rating, 'rating-input')}
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select data-testid="genre-input" id="genre" value={ genre } onChange={ this.handleChange }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.resetState }
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
