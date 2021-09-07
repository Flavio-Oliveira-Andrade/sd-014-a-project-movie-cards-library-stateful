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
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(this);
  }

  construtorTag(data, name, type, value) {
    return (
      <input
        type={ type }
        data-testid={ data }
        value={ value }
        name={ name }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="filme-input" data-testid="title-input-label">
          Título
          {this.construtorTag('title-input', 'title', 'text', title)}
        </label>
        <label htmlFor="Subtitulo-add-Filme" data-testid="subtitle-input-label">
          Subtítulo
          {this.construtorTag('subtitle-input', 'subtitle', 'text', subtitle)}
        </label>
        <label htmlFor="imagem-label" data-testid="image-input-label">
          Imagem
          {this.construtorTag('imagePath', 'imagePath', 'text', imagePath)}
        </label>
        <label htmlFor="textarea-Sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ () => this.handleChange }
          />
        </label>
        <label htmlFor="rating-tag" data-testid="rating-input-label">
          {this.construtorTag('rating-input', 'rating', 'number', rating)}
        </label>
        <label htmlFor="gereId" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ () => this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.enviarFormFilme }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
