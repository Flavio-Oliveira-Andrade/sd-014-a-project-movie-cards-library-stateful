import React from 'react';
import PropTypes from 'prop-types';

class InputSubTitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <section>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ handleChange }
            value={ subtitle }
          />
        </label>
      </section>
    );
  }
}

InputSubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputSubTitle;
