// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      rating: 0,
      imagePath: '',
      storyline: '',
      genre: 'action',
    }
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleClick (event) {
    event.preventDefault();

    this.setState( {
      title: '',
      subtitle: '',
      rating: 0,
      imagePath: '',
      storyline: '',
      genre: 'action',
    })

  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;


    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">Título
          <input onChange={this.handleChange} data-testid="title-input" value={title} type="text" name="title" id="title" />
        </label><br />
        <label data-testid="subtitle-input-label" htmlFor="subtitle">Subtítulo
          <input onChange={this.handleChange} data-testid="subtitle-input" value={subtitle} type="text" name="subtitle" id="subtitle" />
        </label><br />
        <label data-testid="rating-input-label" htmlFor="rating">Avaliação
          <input onChange={this.handleChange} data-testid="rating-input" value={rating} type="number" name="rating" id="rating" step="0.1" />
        </label><br />
        <label data-testid="image-input-label" htmlFor="imagePath">Imagem
          <input onChange={this.handleChange} data-testid="image-input" value={imagePath} type="text" name="imagePath" id="imagePath" />
        </label><br />
        <label data-testid="storyline-input-label" htmlFor="storyline">Sinopse
          <textarea onChange={this.handleChange} data-testid="storyline-input" value={storyline} type="text" name="storyline" id="storyline" />
        </label><br />
        <label data-testid="genre-input-label" htmlFor="genre">Gênero
          <select data-testid="genre-input" name="genre" id="genre">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label><br />
        <button onClick={ this.handleClick } data-testid="send-button">Adicionar filme</button>


      </form>
    );
  }
}

export default AddMovie;
