import React from 'react';
import PropTypes from 'prop-types';

import { bookmarkTestIds } from '../data';

const { labelId, inputId } = bookmarkTestIds;

class BookmarkInput extends React.Component {
  render() {
    const { value, handler } = this.props;
    return (
      <div className="form-check">
        <label htmlFor="bookmarkedOnly" data-testid={ labelId }>
          <input
            type="checkbox"
            name="bookmarkedOnly"
            id="bookmarkedOnly"
            checked={ value }
            value={ value }
            data-testid={ inputId }
            onChange={ handler }
            className="form-check-input"
          />
          Mostrar somente favoritos
        </label>
      </div>
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
