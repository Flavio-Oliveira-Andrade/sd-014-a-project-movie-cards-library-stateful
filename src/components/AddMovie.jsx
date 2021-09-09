import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    if (event.target.type === 'checkbox') {
      this.setState({
        [event.target.name]: event.target.checked,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;

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

  inputComponent(type, name, testid, value) {
    return (
      <input
        type={ type }
        name={ name }
        data-testid={ testid }
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          {this.inputComponent('text', 'title', 'title-input', title)}
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          {this.inputComponent('text', 'subtitle', 'subtitle-input', subtitle)}
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          {this.inputComponent('text', 'imagePath', 'image-input', imagePath)}
        </label>
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
          {this.inputComponent('number', 'rating', 'rating-input', rating)}
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
          <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
            Adicionar filme
          </button>
        </label>
      </form>
    );
  }
}

export default AddMovie;
