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
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            name="title"
            value={ title }
            onChange={ title }
          />
        </label>
        <label htmlFor="title" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ subtitle }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="imagePath"
            value={ imagePath }
            onChange={ imagePath }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Imagem
          <textarea
            type="storyline"
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ storyline }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
