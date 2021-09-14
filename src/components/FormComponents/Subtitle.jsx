import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Subtitle extends Component {
  render() {
    const { subtitle, handdleChange } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="textoInput">
        Subtítulo
        <input
          defaultValue={ subtitle }
          name="subtitle"
          data-testid="subtitle-input"
          className="textoInput"
          type="text"
          onChange={ handdleChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default Subtitle;
