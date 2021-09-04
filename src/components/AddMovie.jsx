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
      rating: 0,
      genre: 'action',
    };
  }

  handleClick = (event) => {
    event.preventDefault();
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
    );
  }

  handleChange = ({ target }) => {
    const { name } = target;

    this.setState({
      [name]: (target.type === 'checkbox' ? target.checked : target.value),
    });
  }

  // funcao que cria um input automagicamente tendo como parametros inputName, inputType, value, dataTestId respectivamente
  // chamando a funcao que cria o input na linha 49, passando os parametros que o input terá */}
  createInput = (inputName, inputType, value, dataTestId) => (
    <input
      name={ inputName }
      type={ inputType }
      value={ value }
      data-testid={ dataTestId }
      onChange={ this.handleChange }
    />
  );

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.createInput('title', 'text', title, 'title-input') }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.createInput('subtitle', 'text', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          { this.createInput('imagePath', 'text', imagePath, 'image-input') }
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          >
            { storyline }
          </textarea>
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { this.createInput('rating', 'number', rating, 'rating-input') }
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ this.handleClick } type="button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
