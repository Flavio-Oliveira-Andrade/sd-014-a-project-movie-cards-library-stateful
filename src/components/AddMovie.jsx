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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    const { onClick } = this.props;
    event.preventDefault();
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

  inputs(id, type, name, value) {
    return (
      <input
        data-testid={ id }
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (

      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título:
          { this.inputs('title-input', 'text', 'title', title)}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo:
          { this.inputs('subtitle-input', 'text', 'subtitle', subtitle)}
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem:
          { this.inputs('image-input', 'text', 'imagePath', imagePath)}
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse:
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação:
          { this.inputs('rating-input', 'number', 'rating', rating)}
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero:
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.handleClick }>
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
