// implement AddMovie component here
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  createInput(type, name, value, dataTestid) {
    return (<input
      type={ type }
      name={ name }
      value={ value }
      onChange={ this.handleChange }
      data-testid={ dataTestid }
    />);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
          <label data-testid="title-input-label" htmlFor>
            Título
            {this.createInput('text', 'title', title, 'title-input')}
          </label>
          <label
            data-testid="subtitle-input-label"
            htmlFor
          >
            Subtítulo
            {this.createInput('text', 'subtitle', subtitle, 'subtitle-input')}
          </label>
          <label data-testid="image-input-label" htmlFor>
            Imagem
            {this.createInput('text', 'imagePath', imagePath, 'image-input')}
          </label>
          <label data-testid="storyline-input-label" htmlFor>
            Sinopse
            <textarea
              name="storyline"
              value={ storyline }
              onChange={ this.handleChange }
              data-testid="storyline-input"
            />
          </label>
          <label data-testid="rating-input-label" htmlFor>
            Avaliação
            {this.createInput('number', 'rating', rating, 'rating-input')}
          </label>
          <label data-testid="genre-input-label" htmlFor>
            Gênero
            <select
              value={ genre }
              data-testid="genre-input"
              onChange={ this.handleChange }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>

    );
  }
}
export default AddMovie;
