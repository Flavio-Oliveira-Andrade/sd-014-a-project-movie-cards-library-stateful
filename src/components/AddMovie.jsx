import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  handleChangeSubtitle = (event) => {
    this.setState({
      subtitle: event.target.value,
    });
  }

  render() {
    const {
      title,
      subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChangeTitle }
            // name={ title }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChangeSubtitle }
            // name={ subtitle }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
