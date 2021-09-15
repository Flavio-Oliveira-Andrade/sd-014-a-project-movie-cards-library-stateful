import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxInputS extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <section>
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
      </section>
    );
  }
}

CheckboxInputS.propTypes = {
  checked: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default CheckboxInputS;
