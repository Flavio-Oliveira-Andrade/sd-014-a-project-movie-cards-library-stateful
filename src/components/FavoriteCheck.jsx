import React from 'react';
import PropTypes from 'prop-types';

class FavoriteCheck extends React.Component {
  render() {
    const { checked, onChange, name } = this.props;
    return (
      <label htmlFor="checkbox-favorite" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          id="checkbox-favorite"
          name={ name }
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
  name: PropTypes.string.isRequired,
};

export default FavoriteCheck;
