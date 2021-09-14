import React from 'react';

class Titulo extends React.Component {
  render() {
    const { title, handleClick } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ handleClick }
        />
      </label>
    );
  }
}

export default Titulo;
