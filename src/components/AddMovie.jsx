import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid='add-movie-form'>
          <label data-testid='title-input-label' htmlFor='title'>
            Título
            <input type='text' value={title} name='title' onChange={this.handleChange} data-testid="title-input"/>
          </label>
          <label data-testid='subtitle-input-label' htmlFor='subtitle'>
            Subtítulo
            <input type='text' value={subtitle} name='subtitle' onChange={this.handleChange} data-testid="subtitle-input"/>
          </label>
          <label data-testid='image-input-label' htmlFor='imagePath'>
            Imagem
            <input type='text' value={imagePath} name='imagePath' onChange={this.handleChange} data-testid="image-input"/>
          </label>
          <label data-testid='storyline-input-label' htmlFor='storyline'>
            Sinopse
            <textarea type='text' value={storyline} name='storyline' onChange={this.handleChange} data-testid="storyline-input"></textarea>
          </label>
        </form>
      </section>
    );
  }
}
