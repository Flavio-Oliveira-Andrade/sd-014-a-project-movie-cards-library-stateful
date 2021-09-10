import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Label.css';

export default class Label extends Component {
  render() {
    const { name, id, type, state, funcName } = this.props;

    return (
      <label htmlFor={ `${id}Input` } data-testid={ `${id}-input-label` }>
        { name }
        <input
          id={ `${id}Input` }
          type={ type }
          value={ state }
          data-testid={ `${id}-input` }
          onChange={ funcName }
        />
      </label>
    );
  }
}

Label.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  funcName: PropTypes.func.isRequired,
};
