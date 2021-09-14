import React from 'react';

class TitleInput extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          value={ title }
          id="title"
          type="text"
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default TitleInput;
