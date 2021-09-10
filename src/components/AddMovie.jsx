// implement AddMovie component here
import React from 'react';
import Imagem from './Imagem';
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
      </form>
    );
  }
}

export default AddMovie;
