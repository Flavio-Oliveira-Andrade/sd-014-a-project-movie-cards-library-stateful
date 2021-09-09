import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <label htmlFor="titulo" data-testid="title-input-label">
        Título:
        <input
          value={ value }
          type="text"
          name="title"
          id="titulo"
          data-testid="title-input"
          onChange={ onClick }
        />
      </label>
    );
  }
}

Titulo.propTypes = ({
  value: PropTypes.string,
  onClick: PropTypes.func,
}).isRequired;

export default Titulo;
