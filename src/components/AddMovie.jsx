// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import TextArea from './TextArea';
import Select from './Select';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleState(event) {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
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
          name="imagePath"
          handleChange={ this.handleChange }
          value={ imagePath }
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
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleState }
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
