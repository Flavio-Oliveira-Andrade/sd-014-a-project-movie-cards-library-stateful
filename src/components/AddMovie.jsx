import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  createCustomInput(id, onChange, type, value) {
    const name = id === 'image' ? 'imagePath' : id;

    return (
      <input
        data-testid={ `${id}-input` }
        id={ id }
        name={ name }
        onChange={ onChange }
        type={ type }
        value={ value }
      />
    );
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          {this.createCustomInput('title', this.handleChange, 'text', title)}
        </label>
        <label data-testid="title-input-label" htmlFor="title">
          Subtítulo
          {this.createCustomInput('subtitle', this.handleChange, 'text', subtitle)}
        </label>
        <label data-testid="title-input-label" htmlFor="title">
          Imagem
          {this.createCustomInput('image', this.handleChange, 'text', imagePath)}
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            data-testid="storyline-input"
            id="storyline"
            name="storyline"
            onChange={ this.handleChange }
            value={ storyline }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
