import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      // subtitle: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,

    });
  }

  titleInput() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          onChange={ this.handleChange }
          value={ title }
          type="text"
          id="title"
          data-testid="title-input"
        />

      </label>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          { this.titleInput() }
        </form>
      </div>
    );
  }
}

export default AddMovie;
