import React, { Component } from 'react';
import PropTypes from 'prop-types';

const inicialState = {
  storyline: '',
};

class Sinopse extends Component {
  constructor() {
    super();
    this.state = inicialState;
  }

  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          id="storyline"
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default Sinopse;
