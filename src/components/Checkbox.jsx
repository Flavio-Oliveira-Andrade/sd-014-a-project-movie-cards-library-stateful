import React from 'react';
import PropTypes from 'prop-types';

class Checked extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label htmlFor="checked" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          id="checked"
          name="bookmarkedOnly"
          type="checkbox"
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}
Checked.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}.isRequired;

export default Checked;
