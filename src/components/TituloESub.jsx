import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TituloESub extends Component {
  render() {
    const { title, subtitle, handleChange } = this.props;
    return (
      <>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            value={ title }
            name="title"
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            value={ subtitle }
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

TituloESub.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TituloESub;
