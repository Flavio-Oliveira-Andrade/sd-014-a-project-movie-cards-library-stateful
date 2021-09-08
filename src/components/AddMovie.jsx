import React from 'react';

const INITIAL_STATE = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick();
    this.setState(INITIAL_STATE);
  }

  render() {
    const { handleChange, handleClick } = this;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input type="text" name="title" data-testid="title-input" value={ title } onChange={ handleChange } />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="storyline-input-label">
          Sinopse
          <textarea id="storyline" name="storyline" value={ storyline } cols="30" rows="10" onChange={ handleChange } data-testid="storyline-input" />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input type="number" name="rating" id="rating" value={ rating } onChange={ handleChange } data-testid="rating-input" />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select id="genre" name="genre" value={ genre } onChange={ handleChange } data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={ handleClick } data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
