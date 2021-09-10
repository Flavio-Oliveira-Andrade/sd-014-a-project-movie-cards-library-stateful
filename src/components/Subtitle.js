import React from 'react';

class Subtitle extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ subtitle: event.target.value });
  }

  render() {
    const { subtitle } = this.state;
    return (
      <label htmlFor data-testid="subtitle-input-label">
        Subtítulo
        <input
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default Subtitle;
