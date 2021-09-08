/* eslint-disable jsx-a11y/label-has-associated-control */
// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <label htmlForm="title" data-testid="title-input-label">
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
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
