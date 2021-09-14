import React from 'react';

class Subtitulo extends React.Component {
  render() {
    const { subtitle, handleClick } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Título
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleClick }
        />
      </label>
    );
  }
}

export default Subtitulo;
