import React from 'react';
import TitleInput from './AddMInputs/TitleInput';
import SubInput from './AddMInputs/SubInput';
import ImagePath from './AddMInputs/ImageInput';
import TextareaInput from './AddMInputs/Textarea';
import RatingInput from './AddMInputs/RatingInput';
import GenreInput from './AddMInputs/GenreInput';

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
    this.handleClick = this.handleClick.bind(this);
  }

  // Um evento genérico foi definido para abranger todos os inputs e economizar código
  // é necessário que o nome do input seja igual ao nome do estado para este truque
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action' });
    // const { onClick } = this.props;
    // onClick(this.state);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form type="submit" ata-testid="add-movie-form">
        <TitleInput title={ title } handleChange={ this.handleChange } />
        <SubInput subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImagePath ImagePath={ imagePath } handleChange={ this.handleChange } />
        <TextareaInput storyline={ storyline } handleChange={ this.handleChange } />
        <RatingInput rating={ rating } handleChange={ this.handleChange } />
        <GenreInput genre={ genre } handleChange={ this.handleChange } />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
