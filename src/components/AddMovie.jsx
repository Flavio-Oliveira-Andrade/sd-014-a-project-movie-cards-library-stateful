// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(
      {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      }
    )
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">Título
            <input type="text" name="title" value={this.state.title} data-testid="title-input" onChange={this.handleChange}/>
          </label>
          <label data-testid="subtitle-input-label">Subtítulo
            <input type="text" name="subtitle" value={this.state.subtitle} data-testid="subtitle-input" onChange={this.handleChange}/>
          </label>
          <label data-testid="image-input-label">Imagem
            <input type="text" name="imagePath" value={this.state.imagePath} data-testid="image-input" onChange={this.handleChange}/>
          </label>
          <label data-testid="storyline-input-label">Sinopse
            <input type="text" name="storyline" value={this.state.storyline} data-testid="storyline-input" onChange={this.handleChange}/>
          </label>
          <label data-testid="rating-input-label">Avaliação
            <input type="number" name="rating" value={this.state.rating} data-testid="rating-input" onChange={this.handleChange}/>
          </label>
          <label data-testid="genre-input-label"> Gênero
            <select name="genre" value={this.state.genre} onChange={this.handleChange} data-testid="genre-input">
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button" onClick={ this.handleClick }>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;