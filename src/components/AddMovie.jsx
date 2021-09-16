// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import CustomTextAreaInput from './CustomTextAreaInput';
import CustomTextInput from './CustomTextInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';

const startState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = startState;
  }

  // adaptado de https://www.codegrepper.com/code-examples/javascript/handleInput+%3D+%28event%29+%3D%3E+%7B+react
  // linha 9 em diante com adição do terceiro codigo neste link https://www.pluralsight.com/guides/how-to-use-react-to-set-the-value-of-an-input
  // aprendi com este conteúdo um pouco extenso mas me explicou props vs state e várias outras coisas
  // https://learn.co/lessons/react-updating-state
  handleSubmit = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState = startState;
  }

  handleInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  // usar o name como nome da propriedade salva no estado
  // retirado de https://www.pluralsight.com/guides/how-to-use-react-to-set-the-value-of-an-input
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <CustomTextInput
          value={ title }
          onChange={ this.handleInput }
          dataID="title-input"
          name="title"
          title="Título"
        />
        <CustomTextInput
          value={ subtitle }
          onChange={ this.handleInput }
          dataID="subtitle-input"
          name="subtitle"
          title="Subtítulo"
        />
        <CustomTextInput
          value={ imagePath }
          onChange={ this.handleInput }
          dataID="image-input"
          name="imagePath"
          title="Imagem"
        />
        <CustomTextAreaInput
          value={ storyline }
          onChange={ this.handleInput }
          dataID="storyline-input"
          name="storyline"
          title="Sinopse"
        />
        <RatingInput value={ rating } onChange={ this.handleInput } />
        <GenreInput value={ genre } onChange={ this.handleInput } />
        <button type="submit" data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
