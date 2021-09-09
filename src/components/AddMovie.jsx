import React from 'react';
import Proptypes from 'prop-types';

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
    this.clickHandler = this.clickHandler.bind(this);
  }

  handleChange({ target }) { // gerencia as alterações dentro da SearchBar.
    this.setState({
      [target.name]: target.value }); // de acordo com o nome do campo selecionado, faz a alteração de seu conteúdo.
  } // Caso seja uma checkbox, altera o atributo checked, caso não seja, altera para o valor selecionado/digitado.

  clickHandler(event) { // gerencia o envio de dados para o elemento pai como prop e retorna os dados para o estado inicial.
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputCreator(type, name, value, dataTestid) { // cria os campos de input de acordo com as informações dos campos
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.handleChange }
        data-testid={ dataTestid }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.inputCreator('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.inputCreator('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.inputCreator('text', 'imagePath', imagePath, 'image-input') }
        </label>
        <label htmlFor="movie-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { this.inputCreator('number', 'rating', rating, 'rating-input') }
        </label>
        <label htmlFor="movie-genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.clickHandler }>
          Adicionar filme
        </button>
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: Proptypes.func.isRequired,
};
export default AddMovie;
