import React from 'react';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          value={ value }
          type="text"
          onChange={ handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

export default Title;
