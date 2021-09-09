import React from 'react';

class Storyline extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="handle-change-storyline" data-testid="storyline-input-label">
          Título
          <input
            type="text"
            name="storyline"
            data-testid="storyline-input"
            onChange={ this.handleChange }
            id="handle-change-storyline"
          />
        </label>
      </div>
    );
  }
}

export default Storyline;
