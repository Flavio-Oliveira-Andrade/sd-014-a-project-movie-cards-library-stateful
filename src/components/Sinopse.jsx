import React from 'react';

class Sinopse extends React.Component {

  render() {
    const { storyline , update } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          type="text"
          value={ storyline }
          name="storyline"
          data-testid="storyline-input"
          onChange={ update }
        />
      </label>
    );
  }
}

export default Sinopse;
