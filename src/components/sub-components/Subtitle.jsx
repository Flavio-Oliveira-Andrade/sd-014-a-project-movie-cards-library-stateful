import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    )
  }
}

export default Subtitle;