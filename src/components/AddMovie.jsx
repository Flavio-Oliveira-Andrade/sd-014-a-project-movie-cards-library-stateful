import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="input-title">
          Título
          <input
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
            name="title"
            id="input-title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="input-subtitle">
          Subtítulo
          <input
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
            name="subtitle"
            id="input-subtitle"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="input-image">
          Imagem
          <input
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
            name="imagePath"
            id="input-image"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="text-story">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
            name="storyline"
            id="input-image"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
