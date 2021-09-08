import React from 'react';
import PropTypes from 'prop-types';

class CreateTextArea extends React.Component {
  render() {
    const { name, value, handleForm, text } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { text }
        <textarea
          name={ name }
          data-testid={ `${name}-input` }
          value={ value }
          id={ name }
          onChange={ handleForm }
        />
      </label>
    );
  }
}

CreateTextArea.propTypes = ({
  name: PropTypes.string,
  value: PropTypes.string,
  handleForm: PropTypes.func,
  text: PropTypes.string,
}).isRequired;

export default CreateTextArea;
