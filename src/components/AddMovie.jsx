import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleClick = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleClick }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
