//  implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';

// 6 - Crie um componente chamado <AddMovie />
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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // A propriedade onChange deve atualizar o estado de <AddMovie />, atribuindo a title o atual título contido no input.
  handleChange({ target }) {
    const { name } = target;
    const valor = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: valor,
    });
  }

  handleClick(event) {
    event.preventDefault(); // Clicando em um botão "Enviar", evita o envio de um formulário <https://www.w3schools.com/jsref/event_preventdefault.asp>
    const { onClick } = this.props;
    onClick(this.state); // esse estado atual (info formulário) será enviado para o componente pai: MovieLibrary
    // Reseta o estado de <AddMovie />, voltando para o inicial.
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  input(name, type, value, dataTestId) {
    return (
      <input
        name={ name }
        type={ type }
        value={ value }
        data-testid={ dataTestId }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { subtitle, storyline, rating, imagePath, genre, title } = this.state;
    //   7 - Renderize um formulário dentro de <AddMovie />
    return (
      <form data-testid="add-movie-form">
        {/* 8 - Renderize um input do tipo texto dentro do formulário em <AddMovie />  */}
        <label htmlFor="title" data-testid="title-input-label">
          Título
          {this.input('title', 'text', title, 'title-input')}
        </label>
        {/* 9 - Renderize um input do tipo texto dentro do formulário em <AddMovie /> */}
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          {this.input('subtitle', 'text', subtitle, 'subtitle-input')}
        </label>
        {/* 10 - Renderize um input do tipo texto dentro do formulário em <AddMovie /> */}
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          {this.input('imagePath', 'text', imagePath, 'image-input')}
        </label>
        {/* 11 - Renderize uma textarea dentro do formulário em <AddMovie /> */}
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          {this.input('rating', 'number', rating, 'rating-input')}
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ this.handleClick } type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequerid,
// };

export default AddMovie;
