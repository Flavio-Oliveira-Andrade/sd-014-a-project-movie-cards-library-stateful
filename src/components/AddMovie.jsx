import React, { Component } from 'react';
import TextInput from './TextInput';

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

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TextInput id="title" onChange={ this.handleChange } value={ title }>
          Título
        </TextInput>
        <TextInput id="subtitle" onChange={ this.handleChange } value={ subtitle }>
          Subtítulo
        </TextInput>
        <TextInput id="image" onChange={ this.handleChange } value={ imagePath }>
          Imagem
        </TextInput>
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
