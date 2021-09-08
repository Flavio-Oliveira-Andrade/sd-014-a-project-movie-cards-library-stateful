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
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="input-titulo"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            id="input-titulo"
            data-testid="title-input"
            value={ title }
            name="title"
            onChange={ this.handleOnChange }
          />
        </label>

        <label
          htmlFor="input-subtitulo"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            id="input-subtitulo"
            data-testid="subtitle-input"
            value={ subtitle }
            name="subtitle"
            onChange={ this.handleOnChange }
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
