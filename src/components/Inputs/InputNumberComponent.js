import React from 'react';
import PropTypes from 'prop-types';

class InputNumberComp extends React.Component {
  render() {
    const { id, titulo, value, callback } = this.props;
    return (
      <label
        data-testid={ `${id}-input-label` }
        htmlFor={ id }
      >
        { titulo }
        <input
          type="number"
          id={ id }
          value={ value }
          data-testid={ `${id}-input` }
          onChange={ callback }
        />
      </label>
    );
  }
}

InputNumberComp.propTypes = {
  id: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.string.isRequired,
};

export default InputNumberComp;
