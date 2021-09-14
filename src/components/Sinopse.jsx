import React from 'react';

class Sinopse extends React.Component {
  render() {
    const { storyline, handleClick } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          type="text"
          value={ storyline }
          onChange={ handleClick }
          data-testid="storyline-input"
          defaultValue={ storyline }
        />
      </label>
    );
  }
}

export default Sinopse;
