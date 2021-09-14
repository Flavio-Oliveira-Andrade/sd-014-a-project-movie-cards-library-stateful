import React from 'react';

class Textarea extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
        { storyline }
      </label>
    );
  }
}

export default Textarea;
