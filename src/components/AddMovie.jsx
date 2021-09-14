import React from 'react';
import PropTypes from 'prop-types';

// OBS: refiz o projeto porque estava com 84% e com alguma mudança que não consegui localizar, o mesmo reduziu para 57%. 
// Refiz os itens do form dinamicamente para reduzir a quantidade de components para evitar novos erros.
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

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createInput(data, name, value) {
    return (
      <input
        data-testid={ data }
        type="text"
        name={ name }
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  createTxtArea(data, name, value) {
    return (
      <textarea
        data-testid={ data }
        name={ name }
        value={ value }
        cols="30"
        rows="10"
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" htmlFor="form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          { this.createInput('title-input', 'title', title)}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          { this.createInput('subtitle-input', 'subtitle', subtitle)}
        </label>
        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          { this.createInput('image-input', 'imagePath', imagePath)}
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          { this.createTxtArea('storyline-input', 'storyline', storyline)}
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            onChange={ this.handleChange }
            value={ rating }
          />
        </label>
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
        <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
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
