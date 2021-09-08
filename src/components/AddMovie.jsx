import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  resetState = () => {
    const { onClick } = this.props;
    onClick();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  construtorTag(data, name, type, value) {
    return (
      <input
        type={ type }
        data-testid={ data }
        value={ value }
        name={ name }
        onChange={ this.handleChange }
      />
    );
  }

  constructorTextArea(name, data, value) {
    return (
      <textarea
        name={ name }
        data-testid={ data }
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          {this.construtorTag('title-input', 'title', 'text', title)}
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          {this.construtorTag('subtitle-input', 'subtitle', 'text', subtitle)}
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          {this.construtorTag('image-input', 'imagePath', 'text', imagePath)}
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          {this.constructorTextArea('storyline', 'storyline-input', storyline)}
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          {this.construtorTag('rating-input', 'rating', 'number', rating)}
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            name="genre"
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
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
