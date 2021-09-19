import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    this.eventHandler = this.eventHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  eventHandler = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      this.setState({
        [name]: checked,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  clickHandler = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    // console.log(this.props);
    // console.log('Clickou!');

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

  createInput(type, name, id, value) {
    return (
      <p>
        <input
          type={ type }
          name={ name }
          data-testid={ id }
          value={ value }
          onChange={ this.eventHandler }
        />
      </p>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      // item 7
      <form data-testid="add-movie-form">
        <p />
        <label htmlFor="movieTitle" data-testid="title-input-label">
          Título
          {this.createInput('text', 'title', 'title-input', title)}
        </label>
        <p />
        <label htmlFor="movieSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          {this.createInput('text', 'subtitle', 'subtitle-input', subtitle)}
        </label>
        <p />
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          {this.createInput('text', 'imagePath', 'image-input', imagePath)}
        </label>
        <p />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          {this.createInput('text', 'storyline', 'storyline-input', storyline)}
        </label>
        <p />
        <label htmlFor="number" data-testid="rating-input-label">
          Avaliação
          {this.createInput('number', 'rating', 'rating-input', rating)}
        </label>
        <p />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.eventHandler }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          <button type="submit" data-testid="send-button" onClick={ this.clickHandler }>
            Adicionar filme
          </button>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
