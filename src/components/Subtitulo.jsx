import React from 'react';
import PropTypes from 'prop-types';

class Subtitulo extends React.Component {
  render() {
    const { subtitle, handleClick } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleClick }
        />
      </label>
    );
  }
}

Subtitulo.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleClick: PropTypes.string.isRequired,
};

export default Subtitulo;
