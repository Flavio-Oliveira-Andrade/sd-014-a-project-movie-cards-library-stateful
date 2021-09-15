// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.state = this.initialState;
    // this.textInput = this.textInput.bind(this);
    // this.subtitleInput = this.subtitleInput.bind(this);
    // this.imageInput = this.imageInput.bind(this);
    // this.textAreaInput = this.textAreaInput.bind(this);
    // this.clickButton = this.clickButton.bind(this);
    // this.clickButton = this.clickButton.bind(this);
  }

  // textInput = () => {
  //   const { title } = this.state;
  //   return (
  //     <input
  //       id="text-input"
  //       type="text"
  //       data-testid="title-input"
  //       value={ title }
  //       onChange={ this.changeValue }
  //     />
  //   );
  // }

  // subtitleInput = () => {
  //   const { subtitle } = this.state;
  //   return (
  //     <input
  //       type="text"
  //       value={ subtitle }
  //       data-testid="subtitle-input"
  //       onChange={ this.changeValue }
  //       id="subtitle-input"
  //     />
  //   );
  // }

  // imageInput = () => {
  //   const { imagePath } = this.state;
  //   return (
  //     <input
  //       type="text"
  //       data-testid="image-input"
  //       onChange={ this.changeValue }
  //       id="image-input"
  //     />
  //   );
  // }

  // textAreaInput = () => {
  //   const { storyline } = this.state;
  //   return (
  //     <textarea
  //       id="textarea"
  //       value={ storyline }
  //       onChange={ this.changeValue }
  //       data-testid="storyline-input"
  //       rows="4"
  //       cols="50"
  //     />
  //   );
  // }

  changeValue = ({ target }) => this.setState({
    [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
  });

  clickButton = (event) => {
    // https://pt-br.reactjs.org/docs/handling-events.html
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.initialState);
  }

  customInput(type, name, value, data) {
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.changeValue }
        data-testid={ data }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    // subtitle, title, imagePath, storyline,
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="text-input" data-testid="title-input-label">
          Título
          { this.customInput('text', 'title', title, 'title-input') }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          { this.customInput('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          { this.customInput('text', 'imagePath', imagePath, 'image-input') }
        </label>
        <label htmlFor="textarea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.changeValue }
          />
        </label>
        <label htmlFor="number" data-testid="rating-input-label">
          Avaliação
          { this.customInput('number', 'rating', rating, 'rating-input') }
        </label>
        <label htmlFor="select" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="select-genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.changeValue }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ this.clickButton } type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
