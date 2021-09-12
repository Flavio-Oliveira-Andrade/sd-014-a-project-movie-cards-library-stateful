import React from 'react';

class ImagePath extends React.Component {
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
      <label data-testid="image-input-label" htmlFor>
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

export default ImagePath;
