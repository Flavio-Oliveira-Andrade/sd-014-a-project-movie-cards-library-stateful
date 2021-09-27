import React, { Component } from 'react';
import AddInputText from './inputs/AddInputText';
import AddInputNumber from './inputs/AddInputNumber';
import AddTextArea from './inputs/AddTextArea';
import AddSelect from './inputs/AddSelect';

export default class AddMovie extends Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.restore = this.restore.bind(this);
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  restore(event) {
    event.prevetDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddInputText
          id="title"
          label="Título"
          value={ title }
          callback={ this.handleChange }
        />
        <AddInputText
          id="subtitle"
          label="Subtítulo"
          value={ subtitle }
          callback={ this.handleChange }
        />
        <AddInputText
          id="imagePath"
          label="Imagem"
          value={ imagePath }
          callback={ this.handleChange }
        />
        <AddTextArea
          name="storyline"
          id="storyline"
          label="Sinopse"
          value={ storyline }
          callback={ this.handleChange }
        />
        <AddInputNumber
          id="rating"
          label="Avaliação"
          value={ rating }
          callback={ this.handleChange }
        />
        <AddSelect
          id="genre"
          label="Gênero"
          value={ genre }
          callback={ this.handleChange }
        />
        <button data-testid="send-button" type="button" onClick={ this.restore }>
          Adicionar filme
        </button>
      </form>
    );
  }
}
