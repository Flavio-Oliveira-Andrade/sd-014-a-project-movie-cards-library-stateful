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

  render() {
    const { handleChange } = this;
    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-text-addmovie" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="input-text-addmovie"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
