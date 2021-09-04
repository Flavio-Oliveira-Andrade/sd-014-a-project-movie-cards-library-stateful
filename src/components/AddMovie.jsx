// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import { property } from 'lodash';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.createInput = this.createInput.bind(this);

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
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  createInput = (inputName, inputType, value, dataTestId) => (
    <input
      name={ inputName }
      type={ inputType }
      value={ value }
      data-testid={ dataTestId }
      onChange={ this.handleChange }
    />
  );

  render() {
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.createInput('title', 'text', title, 'title-input') }
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func,
}.isRequired;

export default AddMovie;
