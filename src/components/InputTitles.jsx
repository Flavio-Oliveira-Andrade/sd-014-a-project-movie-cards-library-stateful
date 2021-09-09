import React from 'react';
import PropTypes from 'prop-types';

class InputTitles extends React.Component {
  render() {
    const {
      props: { title, subtitle, onHandleChange },
    } = this;
    return (
      <>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ onHandleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ onHandleChange }
          />
        </label>
      </>
    );
  }
}

InputTitles.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
};

export default InputTitles;
