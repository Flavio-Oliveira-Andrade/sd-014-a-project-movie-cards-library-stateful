import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddInputNumber extends Component {
  render() {
    const { id, label, value, callback } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        { label }
        <input
          data-testid={ `${id}-input` }
          id={ id }
          type="number"
          value={ value }
          onChange={ callback }
        />
      </label>
    );
  }
}

AddInputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
