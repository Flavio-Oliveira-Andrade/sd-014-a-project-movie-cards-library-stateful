import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { value, onChange, dataID, name, title } = this.props;
    return (
      <label htmlFor={ `${dataID}` } data-testid={ `${dataID}-label` }>
        { `${title}` }
        <textarea
          data-testid={ `${dataID}` }
          id={ `${dataID}` }
          name={ `${name}` }
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  dataID: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default TextInput;
