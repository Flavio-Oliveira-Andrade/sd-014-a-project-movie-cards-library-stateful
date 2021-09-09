import React, { Component } from 'react';
import BodyForm from './BodyForm';
import FooterForm from './FooterForm';
import HeaderForm from './HeaderForm';

class AddMovie extends Component {
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
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <HeaderForm title={ title } subtitle={ subtitle } />
        <BodyForm imagePath={ imagePath } storyline={ storyline } />
        <FooterForm rating={ rating } genre={ genre } />
        <button type="submit" data-testid="send-button" onClick>Adicionar Filme</button>
      </form>
    );
  }
}

export default AddMovie;
