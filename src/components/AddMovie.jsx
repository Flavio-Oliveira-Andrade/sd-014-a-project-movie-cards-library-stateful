// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  customInput(type, id, value, dataTestId) {
    return (
      <input
        type={ type }
        id={ id }
        value={ value }
        onChange={ this.handleChange }
        data-testid={ dataTestId }
        name={ id }
      />
    );
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-text-addmovie" data-testid="title-input-label">
          Título
          { this.customInput('text', 'title', title, 'title-input') }
        </label>
      </form>
    );
  }
}

export default AddMovie;
