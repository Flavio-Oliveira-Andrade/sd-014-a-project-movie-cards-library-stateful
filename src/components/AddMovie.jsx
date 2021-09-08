import React from 'react';
import CreateInput from './CreateInput';
import CreateTextArea from './CreateTextArea';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="form" data-testid="add-movie-form">
        <CreateInput
          name="title"
          value={ title }
          handleForm={ this.handleForm }
          text="Título"
        />
        <CreateInput
          name="subtitle"
          value={ subtitle }
          handleForm={ this.handleForm }
          text="Subtítulo"
        />
        <CreateInput
          name="image"
          value={ imagePath }
          handleForm={ this.handleForm }
          text="Imagem"
        />
        <CreateTextArea
          name="storyline"
          value={ storyline }
          handleForm={ this.handleForm }
          text="Sinopse"
        />
      </form>
    );
  }
}

export default AddMovie;
