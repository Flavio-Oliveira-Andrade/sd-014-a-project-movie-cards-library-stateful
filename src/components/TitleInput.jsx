import React from 'react';

class TitleInput extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título:
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default TitleInput;
