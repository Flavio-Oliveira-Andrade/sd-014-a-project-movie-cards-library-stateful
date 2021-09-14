import React from 'react';
import Subtitle from './createForms/Subtitle';
import Title from './createForms/Title';
import Image from './createForms/Image';
import Textarea from './createForms/Textarea';
import Rating from './createForms/Rating';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <Image imagePath={ imagePath } handleChange={ this.handleChange } />
        <Textarea storyline={ storyline } handleChange={ this.handleChange } />
        <Rating rating={ rating } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
