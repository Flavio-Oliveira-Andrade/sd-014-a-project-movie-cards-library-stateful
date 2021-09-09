import React from 'react';

class Subtitle extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="handle-change-subtitle" data-testid="subtitle-input-label">
          Título
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            id="handle-change-subtitle"
          />
        </label>
      </div>
    );
  }
}

export default Subtitle;
