import React from 'react';
import PropTypes from 'prop-types';

class TC extends React.Component {
  render() {
    const { id, titulo, value, callback } = this.props;
    return (
      <label
        data-testid={ `${id}-input-label` }
        htmlFor={ id === 'image' ? 'imagePath' : id }
      >
        { titulo }
        <input
          type="text"
          id={ id === 'image' ? 'imagePath' : id }
          value={ value }
          data-testid={ `${id}-input` }
          onChange={ callback }
        />
      </label>
    );
  }
}

export default TC;
