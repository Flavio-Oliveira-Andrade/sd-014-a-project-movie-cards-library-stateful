import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { storyline, handdleChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="true">
        Sinopse
        <textarea
          defaultValue={ storyline }
          data-testid="storyline-input"
          name="storyline"
          cols="30"
          rows="10"
          onChange={ handdleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default Storyline;
