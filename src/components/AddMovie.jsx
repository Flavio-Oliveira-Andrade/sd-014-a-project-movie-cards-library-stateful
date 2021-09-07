// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            value={ title }
            type="text"
            data-testid="title-input"
            name="title"
            id="title"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input data-testid="image-input" />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline"
            data-testid="storyline-input"
            value={ storyline }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            value={ rating }
            data-testid="rating-input"
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired };

export default AddMovie;
