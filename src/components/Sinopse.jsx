import React from 'react';

class Sinopse extends React.Component {
  constructor() {
    super();
    this.state = {
      storyline: '',
    };
  }

  updateState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          type="text"
          value={ storyline }
          name="storyline"
          data-testid="storyline-input"
          onChange={ this.updateState }
        />
      </label>
    );
  }
}

export default Sinopse;
