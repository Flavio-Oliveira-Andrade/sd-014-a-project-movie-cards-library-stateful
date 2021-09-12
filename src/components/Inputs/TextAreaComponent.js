import React from 'react';
import PropTypes from 'prop-types';

class TextAreaComp extends React.Component {
  render() {
    const { id, titulo, value, callback } = this.props;
    return (
      <label
        data-testid={ `${id}-input-label` }
        htmlFor={ id }
      >
        { titulo }
        <textarea
          id={ id }
          value={ value }
          data-testid={ `${id}-input` }
          onChange={ callback }
        />
      </label>
    );
  }
}

TextAreaComp.propTypes = {
  id: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.string.isRequired,
};

export default TextAreaComp;
