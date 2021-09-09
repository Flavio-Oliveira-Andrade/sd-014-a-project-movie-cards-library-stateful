import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxInputS extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <div>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="checkboxInput"
            checked={ checked }
            onChange={ onChange }
            data-testid="checkbox-input"
          />
        </label>
      </div>
    );
  }
}

CheckboxInputS.propTypes = {
  checked: PropTypes.string,
  onChange: PropTypes.string,
}.isRequired;

export default CheckboxInputS;
