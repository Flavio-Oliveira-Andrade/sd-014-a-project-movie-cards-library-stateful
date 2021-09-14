import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */

const inicialState = {
  subtitle: '',
  title: '',
  image: '',
  storyline: '',
  rating: '',
  genre: '',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = inicialState;
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
    // Referência: (Carlos Afonso Flach - https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/pull/88/commits/b4e0a60bfd09898afc714cfc73fa7856d4709f3a#)
    //
  };

  render() {
    // const { OnClick } = this.props;
    const { title, subtitle, image, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="image"
            value={ image }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <input
            id="storyline"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}; */

export default AddMovie;
