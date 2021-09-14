import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { title, handdleChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="textoInput">
        Título
        <input
          defaultValue={ title }
          name="title"
          data-testid="title-input"
          className="textoInput"
          type="text"
          onChange={ handdleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default Title;
