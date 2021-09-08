// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: "",
      title: '',
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="handle-change-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
            id="handle-change-title"
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default AddMovie;
