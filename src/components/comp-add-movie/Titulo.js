import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { title, handleOnChange } = this.props;
    return (
      <label
        htmlFor="input-titulo"
        data-testid="title-input-label"
      >
        Título
        <input
          id="input-titulo"
          type="text"
          data-testid="title-input"
          value={ title }
          name="title"
          onChange={ handleOnChange }
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  title: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Titulo;
