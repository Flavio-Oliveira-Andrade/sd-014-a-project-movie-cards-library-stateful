import React, { Component } from 'react';

import PropTypes from 'prop-types';

class HeaderForm extends Component {
  render() {
    const { title, handleChange, subtitle } = this.props;
    return (
      <>
        <label htmlFor="Título" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

HeaderForm.defaultProps = {
  title: '',
  subtitle: '',
  handleChange: () => {},
};

HeaderForm.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  handleChange: PropTypes.func,
};

export default HeaderForm;
