// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Itc from './Inputs/InputTextComponent';
import Inc from './Inputs/InputNumberComponent';
import SelectC from './Inputs/SelectComponent';

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
  }

  handleChange = ({ target }) => {
    const { id } = target;
    const value = id === 'rating'
      ? Number(target.value)
      : target.value;
    this.setState({
      [id]: value,
    });
  }

  funcInput = (id, type, value, test) => (
    <input
      id={ id }
      type={ type }
      value={ value }
      onChange={ this.handleChange }
      data-testid={ test }
    />
  )

  resetState = (e) => {
    const { onClick } = this.props;
    e.preventDefault();
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Itc id="title" callback={ this.handleChange } value={ title } titulo="Título" />
        <Itc
          id="subtitle"
          callback={ this.handleChange }
          value={ subtitle }
          titulo="Subtítulo"
        />
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          {this.funcInput('imagePath', 'text', imagePath, 'image-input')}
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            id="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        <Inc
          id="rating"
          callback={ this.handleChange }
          value={ rating }
          titulo="Avaliação"
        />
        <SelectC
          id="genre"
          callback={ this.handleChange }
          value={ genre }
          titulo="Gênero"
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.resetState }
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
