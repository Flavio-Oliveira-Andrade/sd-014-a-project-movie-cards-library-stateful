import React from 'react';
// import PropTypes from 'prop-types';

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

    this.genericHandler = this.genericHandler.bind(this);
  }

  genericHandler({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">

        <label htmlFor="Título" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            name="title"
            onChange={ this.genericHandler }
          />
        </label>

        <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            name="subtitle"
            onChange={ this.genericHandler }
          />
        </label>

        <label htmlFor="Imagem" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            name="imagePath"
            onChange={ this.genericHandler }
          />
        </label>

        <div
          name={ storyline }
          surname={ rating }
          middlename={ genre }
        >
          this is a dummy div so that lint wont complain
        </div>

      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
