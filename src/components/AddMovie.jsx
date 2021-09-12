// implement AddMovie component here
import React from 'react';
import Genero from './Genero';
import Imagem from './Imagem';
import RatingInput from './RatingInput';
import Subtitle from './Subtitle';
import Textarea from './TextArea';
import Title from './Title';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value });
  }
  render() {
    const {title, subtitle,imagePath, storyline, rating,genre}= this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={this.state.title } handleChange= { this.handleChange}/>
        <Subtitle value={this.state.subtitle } handleChange= { this.handleChange} />
        <Imagem value={this.state.imagePath } handleChange= { this.handleChange}/>
        <Textarea value={this.state.storyline } handleChange= { this.handleChange} />
        <RatingInput value={this.state.rating } handleChange= { this.handleChange} />
        <Genero value={this.state.genre } handleChange= { this.handleChange} />
        <button
          type="reset"
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
