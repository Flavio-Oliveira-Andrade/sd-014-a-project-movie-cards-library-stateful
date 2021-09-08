import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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

  // handle genérico utilizado para atualizar o estado de todos os componentes com a mesma lógica.

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault(); // Limpa comportamento padrão do submit
    const { onClick } = this.props;
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
  // filter 1h11min aula 12.1

  // Função criada para passar no lint, pois o tamanho do form estava muito grande. Ajuda do Marcello Alves para encontrar solução e criar função. <3

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state; // Desestrutura objeto state para não agarrar no lint. Aula 12.1 - min. 51;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange  }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleChange  }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            type="text"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange  }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="image-input">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.handleChange  }
          />
        </label>
        <label data-testid="genre-input-label" hmtlFor="genre">
          Gênero
          <select 
            data-testid="genre-input" 
            value={ genre } 
            name="genre"
            onChange={ this.handleChange  }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.handleClick }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;