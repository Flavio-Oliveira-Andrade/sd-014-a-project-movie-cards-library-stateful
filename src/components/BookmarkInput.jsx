import React from 'react';
import PropTypes from 'prop-types';

class BookmarkInput extends React.Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
        Mostrar somente favoritos:
        <input
          type="checkbox"
          name="bookmarkedOnly"
          id="bookmarkedOnly"
          checked={ value }
          value={ value }
          data-testid="checkbox-input"
          onChange={ handler }
        />
      </label>
    );
  }
}

BookmarkInput.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.bool,
};

BookmarkInput.defaultProps = {
  handler: () => undefined,
  value: false,
};

export default BookmarkInput;
