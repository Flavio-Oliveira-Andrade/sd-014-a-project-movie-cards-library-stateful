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
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (<form data-testid="add-movie-form">
      <fieldset>
        <label htmlFor="titulo" data-testid="title-input-label">Título</label>
        <input name="title" type="text" data-testid="title-input" value={ title } onChange={ this.changeText } />
        <label htmlFor="subTitulo" data-testid="subtitle-input-label">Subtítulo</label>
        <input name="subtitle" type="text" data-testid="subtitle-input" value={ subtitle } onChange={ this.changeText } />
        <label htmlFor="image" data-testid="image-input-label">Imagem</label>
        <input name="imagePath" type="text" value={ imagePath } data-testid="image-input" onChange={ this.changeText } />
        <label htmlFor="sinopse" data-testid="storyline-input-label">Sinopse</label>
        <textarea name="storyline" id="storyline" cols="30" rows="10" data-testid="storyline-input" value={ storyline } onChange={ this.changeText } />
        <label htmlFor="avaliation" data-testid="rating-input-label">Avaliação</label>
        <input type="number" value={ rating } data-testid="rating-input" name="rating" onChange={ this.changeText } />
        <label htmlFor="genero" data-testid="genre-input-label">Gênero</label>
        <select name="genre" id="genre" onChange={ this.changeText } value={ genre } data-testid="genre-input">
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
        <button data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
      </fieldset>
      {console.log(this.state)}
    </form>);
  }
}

export default AddMovie;
