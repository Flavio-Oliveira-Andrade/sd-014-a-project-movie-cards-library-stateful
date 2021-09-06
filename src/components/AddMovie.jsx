// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: 'action',
    };
  }

handleChange = ({ target }) => {
  const { id, value } = target;
  console.log(target['data-testid']);
  this.setState({
    [id]: value,
  });
}

render() {
  const { onClick } = this.props;
  const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
  return (
    <form data-testid="add-movie-form">
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input id="title" type="text" value={ title } onChange={ this.handleChange } data-testid="title-input" />
      </label>
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Título
        <input id="subtitle" type="text" value={ subtitle } onChange={ this.handleChange } data-testid="subtitle-input" />
      </label>
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input id="imagePath" type="text" value={ imagePath } onChange={ this.handleChange } data-testid="image-input" />
      </label>
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          id="storyline"
          value={ storyline }
          onChange={ this.handleChange }
          data-testid="storyline-input"
        />
      </label>
      <label data-testid="rating-input-label" htmlFor="imagePath">
        Avaliação
        <input
          id="rating"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
          data-testid="rating-input"
        />
      </label>
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select data-testid="genre-input" id="genre" value={ genre }>
          <option data-testid="genre-option" value="">Todos</option>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
      <button type="submit" data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
    </form>
  );
}
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
