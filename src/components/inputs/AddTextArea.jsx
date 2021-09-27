import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTextArea extends Component {
  render() {
    const { id, label, value, callback } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        { label }
        <textarea
          name={ id }
          id={ id }
          cols="30"
          rows="10"
          data-testid={ `${id}-input` }
          value={ value }
          onChange={ callback }
        />
      </label>
    );
  }
}

AddTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
