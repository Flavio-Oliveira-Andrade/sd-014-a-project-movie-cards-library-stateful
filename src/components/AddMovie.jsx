// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';
import Inputs from './Inputs';
import TextArea from './TextArea';

const inicialState = {
  subtitle: '',
  title: '',
  image: '',
  storyline: '',
  rating: '',
  genre: '',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = inicialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, image, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Inputs
          name="title"
          type="text"
          handleChange={ this.handleChange }
          value={ title }
          labelText="Título"
          id="title-input"
        />
        <Inputs
          name="subtitle"
          type="text"
          handleChange={ this.handleChange }
          value={ subtitle }
          labelText="Subtítulo"
          id="subtitle-input"
        />
        <Inputs
          name="image"
          type="text"
          handleChange={ this.handleChange }
          value={ image }
          labelText="Imagem"
          id="image-input"
        />
        <TextArea
          name="storyline"
          handleChange={ this.handleChange }
          value={ storyline }
          labelText="Sinopse"
          id="storyline-input"
        />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
