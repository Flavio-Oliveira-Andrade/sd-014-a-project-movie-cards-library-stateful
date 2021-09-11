import React from 'react';
import TitleInput from './inputs/TitleInput';
import SubInput from './inputs/SubInput';
import ImagePath from './inputs/ImageInput';
import TextareaInput from './inputs/Textarea';
import RatingInput from './inputs/RatingInput';

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

  // Um evento genérico foi definido para abranger todos os inputs e economizar código
  // é necessário que o nome do input seja igual ao nome do estado para este truque
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput title={ title } handleChange={ this.handleChange } />
        <SubInput subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImagePath ImagePath={ imagePath } handleChange={ this.handleChange } />
        <TextareaInput storyline={ storyline } handleChange={ this.handleChange } />
        <RatingInput rating={ rating } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
