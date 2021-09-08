import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  updateState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  creatInput = (title, type, dataTest, value) => (
    <input
      name={ title }
      data-testid={ dataTest }
      type={ type }
      value={ value }
      onChange={ this.updateState }
    />
  )

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          {this.creatInput('title', 'text', 'title-input', title)}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          {this.creatInput('subtitle', 'text', 'subtitle-input', subtitle)}
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          {this.creatInput('imagePath', 'text', 'image-input', imagePath)}
        </label>
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
      </form>
    );
  }
}

export default AddMovie;
