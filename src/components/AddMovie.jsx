import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handlechange = this.handlechange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handlechange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  inputConstructor(type, name, id, value) {
    return (
      <input
        type={ type }
        name={ name }
        data-testid={ id }
        value={ value }
        onChange={ this.handlechange }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.inputConstructor('text', 'title', 'title-input', title) }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.inputConstructor('text', 'subtitle', 'subtitle-input', subtitle) }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.inputConstructor('text', 'imagePath', 'image-input', imagePath) }
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="storyline"
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ storyline }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          { this.inputConstructor('number', 'rating', 'rating-input', rating) }
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
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
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
