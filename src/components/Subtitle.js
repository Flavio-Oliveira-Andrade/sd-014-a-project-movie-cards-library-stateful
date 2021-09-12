import React from 'react';

class Subtitle extends React.Component {

  render() {
    const { value, handleChange} = this.props;
    return (
      <label htmlFor data-testid="subtitle-input-label">
        Subtítulo
        <input
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Subtitle;
