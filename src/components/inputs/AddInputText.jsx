import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddInputText extends Component {
  render() {
    const { id, label, value, callback } = this.props;
    return (
      <label
        htmlFor={ id === 'image' ? 'imagePath' : id }
        data-testid={ `${id}-input-label` }
      >
        { label }
        <input
          data-testid={ `${id}-input` }
          id={ id === 'image' ? 'imagePath' : id }
          type="text"
          value={ value }
          onChange={ callback }
        />
      </label>
    );
  }
}

AddInputText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
