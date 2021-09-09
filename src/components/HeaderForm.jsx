import React, { Component } from 'react';

import PropTypes from 'prop-types';

class HeaderForm extends Component {
  render() {
    const { title, subtitle, handleChange } = this.props;
    return (
      <>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
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
