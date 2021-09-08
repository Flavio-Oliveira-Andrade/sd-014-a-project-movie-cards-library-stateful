import { render } from 'enzyme';
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  // handleChange(event) {
  //   this.setState
  // }

  createInput(type, name, value, dataTestid) {
    return (
      <input
        type= { type }
        name={ name }
        value={ value }
        onChange={ this.handleChange }
        data-testid= { dataTestid }
      />
    );
  }

  render() {
    // destruturando state
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {/* usei referência o createInput fazendo o codereview do colega Marcelo A. */}
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.createInput('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.createInput('text', 'subTitle', subtitle, 'subtitle-input-label') }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.createInput('text', 'imagePath', imagePath, 'image-input') }
        </label>
        <label htmlFor="storyline" data-testid="storyline-input">
          Sinopse
          <textarea
            name='storyline'
            value={ storyLine }
            data-testid='storyline-input'
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}
export default AddMovie;