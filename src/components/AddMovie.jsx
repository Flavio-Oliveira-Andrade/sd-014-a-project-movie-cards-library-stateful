import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-subtitle">
          Subtítulo
          <input id="input-subtitle" type="text" value="" />
        </label>
        <label htmlFor="input-subtitle">
          Título
          <input id="input-subtitle" type="text" value="" />
        </label>

        <button type="submit" onClick={ onClick }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
