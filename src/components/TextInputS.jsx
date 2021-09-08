import React, { Component } from 'react';

class TextInputS extends Component {
  render() {
    return (
      <div>
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            // value={ searchText }
            // onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
      </div>
    );
  }
}

export default TextInputS;
