// implement AddMovie component here
import React from 'react';
import Genero from './Genero';
import Imagem from './Imagem';
import RatingInput from './RatingInput';
import Subtitle from './Subtitle';
import Textarea from './TextArea';
import Title from './Title';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <Title />
        <Subtitle />
        <Imagem />
        <Textarea />
        <RatingInput />
        <Genero />
        <button
          type="reset"
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
