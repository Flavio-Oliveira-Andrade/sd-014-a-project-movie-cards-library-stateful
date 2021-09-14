import React from 'react';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          value={ title }
          type="text"
          data-testid="title-input"
          onChange={ handleChange }
        />
        { title }
      </label>
    );
  }
}

export default Title;
