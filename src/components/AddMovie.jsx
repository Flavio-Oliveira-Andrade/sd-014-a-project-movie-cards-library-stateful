import React from 'react';
import PropTypes from 'prop-types';
import CreateInput from './CreateInput';
import CreateTextArea from './CreateTextArea';
import CreateSelect from './CreateSelect';

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
    this.sendState = this.sendState.bind(this);
  }

  handleForm(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  sendState(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
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
        <CreateInput
          name="rating"
          value={ rating }
          handleForm={ this.handleForm }
          text="Avaliação"
        />
        <CreateSelect
          name="genre"
          value={ genre }
          handleForm={ this.handleForm }
          text="Gênero"
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.sendState }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = ({
  onClick: PropTypes.func,
}).isReqiured;

export default AddMovie;
