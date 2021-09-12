import React from 'react';

class Title extends React.Component {
  render() {
    console.log(this);
    const { value, handleChange} = this.props;
    return (
      <label htmlFor data-testid="title-input-label">
        Título
        <input value={ value } data-testid="title-input" onChange={ handleChange } />
      </label>
    );
  }
}

export default Title;
