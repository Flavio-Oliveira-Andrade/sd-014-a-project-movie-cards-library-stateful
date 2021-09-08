import React from 'react';
import PropTypes from 'prop-types';

class CreateInput extends React.Component {
  render() {
    const { name, value, handleForm, text } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { text }
        <input
          type={ text === 'Avaliação' ? 'number' : 'text' }
          name={ name === 'image' ? 'imagePath' : name }
          id={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ handleForm }
        />
      </label>
    );
  }
}

CreateInput.propTypes = ({
  name: PropTypes.string,
  value: PropTypes.string,
  handleForm: PropTypes.func,
  text: PropTypes.string,
}).isRequired;

export default CreateInput;
