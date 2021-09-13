// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.props = {
      onClick: console.log(String("1234")),
    }
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
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
        </form>
      </div>
    );
  }
}

export default AddMovie;