import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleSubmit.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) { // desestrutura 'event.target' para 'target'
    const { name } = target; // acessa 'name' de 'value' (pega todos os names, ex 'title')
    const value = target.type === 'checkbox' ? target.checked : target.value; // para checkbox o bolleano de retorno não fica em 'value', mas sim em 'checkbox'

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault(); // para que botão não salve automaticamente na url ou recarrega a página
    const { onClick } = this.props;
    onClick(this.sate);

    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
  }

  render() {
    return (
      <form data-testid="add-movie-form">

        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            id="title"
            data-testid="title-input"
            value={ this.state.title }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            id="subtitle"
            data-testid="subtitle-input"
            value={ this.state.subtitle }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            id="imagePath"
            data-testid="image-input"
            value={ this.state.imagePath }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline"
            data-testid="storyline-input"
            value={ this.state.storyline }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="" data-testid="rating-input-label">
          Avaliação
          <input
            name=""
            type="number"
            id=""
            data-testid="rating-input"
            value={ this.state.rating }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre"
            data-testid="genre-input"
            value={ this.state.genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          <select/>
        </label>

        <button type="submit" data-testid="send-button" onClick={ this.handleSubmit }>
          Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default AddMovie;
