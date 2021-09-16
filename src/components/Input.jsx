import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { nome, textLabel, value, onChange } = this.props;
    return (
      <label
        data-testid={ `${nome}-input-label` }
        htmlFor={ `${nome}-input` }
      >
        {textLabel}
        <input
          type="text"
          id={ `${nome}-input` }
          name={ nome }
          value={ value }
          data-testid={ `${nome}-input` }
          onChange={ onChange }
        />
      </label>
    );
  }
}
Input.propTypes = {
  nome: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
