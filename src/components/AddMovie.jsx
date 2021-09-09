import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ title: target.value });
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleInput" data-testid="title-input-label">
          Título
          <input
            id="titleInput"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitleInput"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>

        <button type="submit" onClick={ onClick }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
