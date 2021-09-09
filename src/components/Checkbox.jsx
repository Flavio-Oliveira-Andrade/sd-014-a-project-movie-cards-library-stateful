import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="checkbox"
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  bookMarkedOnly: PropTypes.bool,
  onBookMarkedChange: PropTypes.func,
};
export default Checkbox;
