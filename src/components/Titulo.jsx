import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Titulo extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          id="title"
          type="text"
          name="title"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
Titulo.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Titulo;
