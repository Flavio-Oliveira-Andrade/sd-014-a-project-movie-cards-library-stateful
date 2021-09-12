import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleEvent = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      title,
      subtitle,
      // imagePath,
      // storyline,
      // rating,
      // genre
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="addMovieTitle" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="addMovieTitle"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleEvent }
          />
        </label>

        <label htmlFor="addMovieSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleEvent }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
