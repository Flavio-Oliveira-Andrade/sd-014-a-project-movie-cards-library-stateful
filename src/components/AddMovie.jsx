/* eslint-disable jsx-a11y/label-has-associated-control */
// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from './NumberInput';
import GenreInput from './genreInput';

// import Button from './Button';
import Sinopse from './Sinopse';

const stateInitial = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = stateInitial;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
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
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            id="title"
            data-testid="title-input"
            value={ this.stateInitial }
            onChange={ title }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            data-testid="subtitle-input"
            value={ this.stateInitial }
            onChange={ subtitle }
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            id="image"
            type="text"
            value={ this.stateInitial }
            onChange={ imagePath }
          />
        </label>
        <Sinopse value={ storyline } onChange={ this.handleChange } />
        <NumberInput value={ rating } onChange={ this.handleChange } />
        <GenreInput value={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

// <Button onChange={ this.stateInitial } onClick={ this.handleSubmit } />; */}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
