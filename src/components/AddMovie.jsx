import React, { Component } from 'react';

class AddMovie extends Component {
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
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="add-movie-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="add-movie-title"
            value={title}
            data-testid="title-input"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="add-movie-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="add-movie-subtitle"
            value={subtitle}
            data-testid="subtitle-input"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="add-movie-imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="add-movie-imagePath"
            value={imagePath}
            data-testid="image-input"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="add-movie-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="add-movie-storyline"
            cols="30"
            rows="10"
            value={storyline}
            data-testid="storyline-input"
            onChange={this.handleChange}
          ></textarea>
        </label>
        <label htmlFor="add-movie-rating" data-testid="rating-input-label">
          Avaliação
          <input 
          type="number" 
          name="rating" 
          id="add-movie-rating" 
          value={rating}
          data-testid="rating-input"
          onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
