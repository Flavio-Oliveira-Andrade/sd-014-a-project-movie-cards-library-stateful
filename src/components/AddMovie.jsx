import React from 'react';
// import PropTypes from 'prop-types';

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
  // I was trying to use createElement, but I need to have more flexibility on its attributes, then I found out I can just return an actual html element, if not multiple
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
            type="textarea"
            cols="30"
            rows="10"
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
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
