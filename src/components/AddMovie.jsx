import React, { Component } from 'react';
import BodyForm from './BodyForm';
import FooterForm from './FooterForm';
import HeaderForm from './HeaderForm';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      genre: 'action',
      imagePath: '',
      rating: 0,
      storyline: '',
      subtitle: '',
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const BASE = 10;
    /** Descricão: Para forçar a base decimal incluindo o zero basta passa a BASE como segundo parâmetro
    * Source https://stackoverflow.com/questions/8763396/javascript-parseint-with-leading-zeros
    */
    this.setState({ [event.target.name]: parseInt(event.target.value, BASE) });
  }

  addMovie() {

  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <HeaderForm
          title={ title }
          subtitle={ subtitle }
          handleChange={ this.handleChange }
        />
        <BodyForm
          imagePath={ imagePath }
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        <FooterForm
          rating={ rating }
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <button type="submit" data-testid="send-button" onClick={ this.addMovie }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
