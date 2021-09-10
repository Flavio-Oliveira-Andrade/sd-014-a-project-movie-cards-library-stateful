import React from 'react';

class Imagem extends React.Component {
  constructor() {
    super();
    this.state = {
      imagePath: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ imagePath: event.target.value });
  }

  render() {
    const { imagePath } = this.state;
    return (
      <label htmlFor data-testid="image-input-label">
        Imagem
        <input
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default Imagem;
