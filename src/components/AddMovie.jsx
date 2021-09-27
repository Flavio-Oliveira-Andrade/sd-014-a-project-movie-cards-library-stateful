import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputGenerator = this.inputGenerator.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleAdd = (event) => {
    const { onClick } = this.props; // props validation
    event.preventDefault();
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputGenerator(data, type, name, value) {
    return (
      <input 
        data-testid={ data }
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.handleChange }      
      />
    )
  }

  createTextArea(data, name, value) {
    return (
      <textarea
        data-testid={ data }
        name={ name }
        value={ value }
        cols="25"
        rows="1"
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Titulo
            { this.inputGenerator('title-input', 'text', 'title', title) }
          </label >
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            { this.inputGenerator('subtitle-input', 'text', 'subtitle', subtitle) }
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            { this.inputGenerator('image-input', 'text', 'image', imagePath) }
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            { this.createTextArea('storyline-input', 'storyline', storyline) }
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            { this.inputGenerator('rating-input', 'text', 'rating', rating) }
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              data-testid="genre-input"
              name="genre"
              value={ genre } onChange={ this.handleChange }>
                <option data-testid="genre-option" value="action">Ação</option>
                <option data-testid="genre-option" value="comedy">Comédia</option>
                <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button"onClick={ this.handleAdd }>
            Adicionar filme
          </button>
        </form>
      </div>
    )
  }
}

export default AddMovie;
