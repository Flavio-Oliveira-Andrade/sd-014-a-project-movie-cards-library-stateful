import React from 'react';

class Genero extends React.Component {
  constructor() {
    super();
    this.state = {
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    const { genre } = this.state;
    return (
      <label htmlFor data-testid="genre-input-label">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Genero;
