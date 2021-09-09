import React from 'react';
import PropTypes from 'prop-types';

class CheckboxInput extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          type="checkbox"
          checked={ checked }
          onChange={ onChange }
          data-testid="checkbox-input"
          id="checkbox-input"
        />
      </label>
    );
  }
}

CheckboxInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxInput;
