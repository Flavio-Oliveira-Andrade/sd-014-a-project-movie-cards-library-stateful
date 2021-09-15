import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;

    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputs = (type, name, value, data) => ( // Ajuda do Filipe. src: https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/blob/filipe-andrade-santiago-movie-cards-library-stateful/src/components/AddMovie.jsx
    <input
      type={ type }
      name={ name }
      value={ value }
      data-testid={ data }
      onChange={ this.handleChange }
    />
  );

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
          { this.inputs('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitulo" data-testid="subtitle-input-label">
          Subtítulo
          { this.inputs('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="imagem" data-testid="image-input-label">
          Imagem
          { this.inputs('text', 'imagePath', imagePath, 'image-input') }
        </label>

        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="sinopse"
            cols="30"
            rows="10"
            data-testid="storyline-input"
            onChange={ this.handleChange }
          >
            { storyLine /* src:https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/textarea */ }
          </textarea>
        </label>

        <label htmlFor="avaliacao" data-testid="rating-input-label">
          Avaliação
          { this.inputs('number', 'rating', rating, 'rating-input') }
        </label>

        <label htmlFor="genero" data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input" value={ genre }>
            <option value="action" data-testid="genre-option" selected>Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
  // src:https://www.geeksforgeeks.org/how-to-set-the-default-value-for-an-html-select-element/
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: null,
};

export default AddMovie;
