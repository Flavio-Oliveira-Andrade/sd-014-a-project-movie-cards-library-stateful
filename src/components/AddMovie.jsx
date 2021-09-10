import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form" htmlFor="form">
        <label data-testid="title-input-label" htmlFor="title">
          Titulo
          <input
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
            text="text"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
