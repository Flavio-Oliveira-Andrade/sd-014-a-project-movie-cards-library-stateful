import React from "react";



class AddMovie extends React.Component {
  constructor() {
    super()
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
        }
  }
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
        Título
          <input
          data-testid="title-input"
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          >
          </input>
        </label> 

        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
          data-testid="subtitle-input"
          type="text"
          value={this.state.subtitle}
          onChange={this.handleChange}>
          </input>
        </label> 

        <label data-testid="image-input-label">
        Imagem
          <input
          data-testid="image-input"
          type="text"
          value={this.state.imagePath}
          onChange={this.handleChange}>
          </input>
        </label> 

        <label data-testid="storyline-input-label">
        Sinopse
          <textarea
          data-testid="storyline-input"
          value={this.state.storyline}
          onChange={this.handleChange}>
          </textarea>
        </label>

        <label data-testid="rating-input-label">
        Avaliação
          <input
          data-testid="rating-input"
          type="number"
          value={this.state.rating}
          onChange={this.handleChange}>
          </input>
        </label> 

      <label data-testid="genre-input-label">
        Gênero
        <select
        data-testid="genre-input"
        value={this.state.genre}
        onChange={this.handleChange}>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
      <button 
        data-testid="send-button"
        onClick={this.handleChange}>
        Adicionar filme
        </button>
      </form>
    )
  }
}

export default AddMovie;