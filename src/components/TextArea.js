import React from 'react';

class Textarea extends React.Component {
  render() {
    const { value, handleChange} = this.props;
    return (
      <label htmlFor data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ value}
          data-testid="storyline-input"
          onChange={handleChange }
        />
      </label>
    );
  }
}

export default Textarea;
