import React from 'react';
import PropTypes from 'prop-types';

class SubInput extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ subtitle }
          id="subtitle"
          type="text"
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubInput.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default SubInput;
