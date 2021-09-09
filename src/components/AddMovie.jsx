import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id=""
            data-testid="title-input"
            value={ title }
            onChange={ this.handleInput }
          />

        </label>
      </form>
    );
  }
}

export default AddMovie;
