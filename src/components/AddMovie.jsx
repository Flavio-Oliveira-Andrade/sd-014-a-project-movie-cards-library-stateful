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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  createInputText(name, value, data) {
    return (
      <input
        type="text"
        name={ name }
        value={ value }
        data-testid={ data }
        onChange={ this.handleChange }
      />
    );
  }

  createInputNumber(name, value, data) {
    return (
      <input
        type="number"
        name={ name }
        value={ value }
        data-testid={ data }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">
            Título
            {this.createInputText('title', title, 'title-input')}
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo
            {this.createInputText('subtitle', subtitle, 'subtitle-input')}
          </label>
          <label data-testid="image-input-label" htmlFor="imagePath">
            Imagem
            {this.createInputText('imagePath', imagePath, 'image-input')}
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            {this.createInputText('storyline', storyline, 'storyline-input')}
          </label>
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação
            {this.createInputNumber('rating', rating, 'rating-input')}
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              name="genre"
              value={ genre }
              onChange={ this.handleChange }
              data-testid="genre-input"
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button" type="button" onClick={ this.handleClick }>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
