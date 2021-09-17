import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { nome, textLabel, value, onChange, type } = this.props;
    return (
      <label
        data-testid={ `${nome}-input-label` }
        htmlFor={ `${nome}-input` }
      >
        {textLabel}
        <input
          type={ type }
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
