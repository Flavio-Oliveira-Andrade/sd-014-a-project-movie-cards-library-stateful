// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';
import Inputs from './Inputs';
import TextArea from './TextArea';
import Select from './Select';

const inicialState = {
  subtitle: '',
  title: '',
  image: '',
  storyline: '',
  rating: 0,
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
    const { title, subtitle, image, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Inputs
          name="title"
          handleChange={ this.handleChange }
          value={ title }
          labelText="Título"
        />
        <Inputs
          name="subtitle"
          handleChange={ this.handleChange }
          value={ subtitle }
          labelText="Subtítulo"
        />
        <Inputs
          name="image"
          handleChange={ this.handleChange }
          value={ image }
          labelText="Imagem"
        />
        <TextArea
          name="storyline"
          handleChange={ this.handleChange }
          value={ storyline }
          labelText="Sinopse"
        />
        <Inputs
          name="rating"
          handleChange={ this.handleChange }
          value={ rating }
          labelText="Avaliação"
        />
        <Select
          name="genre"
          handleChange={ this.handleChange }
          value={ genre }
          labelText="Gênero"
        />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
