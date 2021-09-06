import React from 'react';
import PropTypes from 'prop-types';

class FavoriteCheck extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label htmlFor="checkbox-favorite" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          id="checkbox-favorite"
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FavoriteCheck.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FavoriteCheck;
