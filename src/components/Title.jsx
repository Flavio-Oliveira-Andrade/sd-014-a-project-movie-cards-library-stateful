import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="handle-change-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            onChange={ this.handleChange }
            id="handle-change-title"
          />
        </label>
      </div>
    );
  }
}

export default Title;
