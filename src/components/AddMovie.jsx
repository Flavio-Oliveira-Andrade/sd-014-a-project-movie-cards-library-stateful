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
    this.setState({ [event.target.name]: event.target.value });
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
        <BodyForm imagePath={ imagePath } storyline={ storyline } />
        <FooterForm rating={ rating } genre={ genre } />
        <button type="submit" data-testid="send-button" onClick>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
