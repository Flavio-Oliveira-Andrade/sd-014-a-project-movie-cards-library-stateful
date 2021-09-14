import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ subtitle }
          type="text"
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
        { subtitle }
      </label>
    );
  }
}

export default Subtitle;
