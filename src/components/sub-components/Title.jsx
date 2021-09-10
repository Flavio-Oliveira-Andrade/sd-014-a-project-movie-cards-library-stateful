import React from 'react';

class Title extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    )
  }
}

export default Title;
