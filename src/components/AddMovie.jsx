import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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

    this.genericHandler = this.genericHandler.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  newMovie = (event) => {
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

  genericHandler({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  inputMaker(name, type, value, dataID) {
    return (<input
      type={ type }
      name={ name }
      value={ value }
      data-testid={ dataID }
      onChange={ this.genericHandler }
    />);
  }
  // https://stackoverflow.com/questions/46623136/react-component-returning-raw-html

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="Título" data-testid="title-input-label">
          Título
          {this.inputMaker('title', 'text', title, 'title-input')}
        </label>
        <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
          Subtítulo
          {this.inputMaker('subtitle', 'text', subtitle, 'subtitle-input')}
        </label>
        <label htmlFor="Imagem" data-testid="image-input-label">
          Imagem
          {this.inputMaker('imagePath', 'text', imagePath, 'image-input')}
        </label>
        <label htmlFor="Sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            rows="10"
            cols="30"
            onChange={ this.genericHandler }
          />
        </label>
        <label htmlFor="Avaliação" data-testid="rating-input-label">
          Avaliação
          {this.inputMaker('rating', 'number', rating, 'rating-input')}
        </label>
        <label htmlFor="Gênero" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.genericHandler }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="reset" data-testid="send-button" onClick={ this.newMovie }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

// This whole render needs to be split into more components. 100% sure of that, but I'm afraid of breaking everything, so...

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
