import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onCLick } = this.props;
    const { title, subtitle, imagePath } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            onChange={ this.handleChange }
            type="text"
            id="title"
            name="title"
            value={ title }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            onChange={ this.handleChange }
            type="text"
            id="subtitle"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            onChange={ this.handleChange }
            type="text"
            id="image"
            name="image"
            src={ imagePath }
            data-testid="image-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
