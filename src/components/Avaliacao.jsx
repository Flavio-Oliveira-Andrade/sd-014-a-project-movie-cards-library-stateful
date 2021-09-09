import React from 'react';

class Avaliação extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
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
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.updateState }
        />
      </label>
    );
  }
}

export default Avaliação;
