import React from 'react';

class Textarea extends React.Component {
  constructor() {
    super();
    this.state = {
      storyline: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ storyline: event.target.value });
  }

  render() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor>
        Sinopse
        <input
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default Textarea;
