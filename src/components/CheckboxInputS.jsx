import React, { Component } from 'react';

class CheckboxInputS extends Component {
  render() {
    return (
      <div>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            // checked={ bookmarkedOnly }
            // onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </div>
    );
  }
}

export default CheckboxInputS;
