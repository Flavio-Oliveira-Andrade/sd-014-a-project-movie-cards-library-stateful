// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: "action",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="handle-change-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            name="title"
            data-testid="title-input"
            onChange={ this.handleChange }
            id="handle-change-title"
          />
        </label>
        <label htmlFor="handle-change-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            id="handle-change-subtitle"
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

// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
