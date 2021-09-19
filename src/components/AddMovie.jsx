import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath:'',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    const {
      onClick,
    } = this.props;
    const { title } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input type="text" id="subtitle" />
        </label>
        <label htmlFor="imagePath">
          Caminho da imagem
          <input type="text" id="imagePath" />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <input type="text" id="storyline" />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input type="number" id="rating" />
        </label>
        <label htmlFor="genre">
          Gênero
          <input type="text" id="genre" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
