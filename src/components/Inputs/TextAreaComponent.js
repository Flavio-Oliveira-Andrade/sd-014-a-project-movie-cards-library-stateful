import React from 'react';
import PropTypes from 'prop-types';

class TAC extends React.Component {
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

export default TAC;
