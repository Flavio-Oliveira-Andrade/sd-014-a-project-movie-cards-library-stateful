import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { name, handleChange,
      value, labelText } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ name === 'imagePath' ? 'image-input-label' : `${name}-input-label` }
      >
        { labelText }
        <input
          type={ labelText === 'Avaliação' ? 'number' : 'text' }
          name={ name }
          value={ value }
          data-testid={ name === 'imagePath' ? 'image-input' : `${name}-input` }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Inputs;
