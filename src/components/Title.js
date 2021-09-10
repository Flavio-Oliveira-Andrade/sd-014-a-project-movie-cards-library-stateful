import React from 'react';

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    console.log(this);
    const { title } = this.state;
    return (
      <label htmlFor data-testid="title-input-label">
        Título
        <input value={ title } data-testid="title-input" onChange={ this.handleChange } />
      </label>
    );
  }
}

export default Title;
