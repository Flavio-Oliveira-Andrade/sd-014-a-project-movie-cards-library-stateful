import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { subtitle, handleOnChange } = this.props;
    return (
      <label
        htmlFor="input-subtitulo"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          id="input-subtitulo"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          name="subtitle"
          onChange={ handleOnChange }
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Titulo;
