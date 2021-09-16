// Importação dos Componente e das PropTypes
import React from 'react';
import FormAddMovieTitle from './FormAddMovieTitle';
import FormAddMovieSubtitle from './FormAddMovieSubtitle';
import FormAddMovieImagePath from './FormAddMovieImagePath';

// Criação do Componente AddMovie e renderizando.
class AddMovie extends React.Component {
  constructor() {
    super();

    // serve para ter acesso ao estado inicial this.state
    this.handleChange = this.handleChange.bind(this);

    // criando o estado inical do componente.
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;

    // Atualiza o estado de forma Assincrona.
    this.setState({
      [name]: value,
    });
  }

  render() {
    // Serve para capturar as propriedades do meu estado utilizando o methodo destructuring.
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      // Formulário de Adiconar de Filmes.
      <form data-testid="add-movie-form">
        {/* Passando as informações do Componente Pai para o filho no estado */}
        <FormAddMovieTitle value={ title } onChange={ this.handleChange } />
        <FormAddMovieSubtitle value={ subtitle } onChange={ this.handleChange } />
        <FormAddMovieImagePath value={ imagePath } onChange={ this.handleChange } />
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <input
            data-testid="storyline-input"
            name="storyline"
            type="text"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            type="number"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            type="select"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

// exportando o componente AddMovie.
export default AddMovie;
