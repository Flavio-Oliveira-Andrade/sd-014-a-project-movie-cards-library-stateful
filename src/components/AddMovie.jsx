import React from 'react';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';

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

  // Preferi fazer com  bind ao invés de arrow functions porque na aula, a Maitê diz que algumas versões de react e de eslint podem recusar a arrow function. Pensando em projetos em todas as versões de eslint e react fiz dessa forma
  // handleChange = (event) => { [event.target.name]: event.target.value }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    const { onClick } = this.props; // callback
    return (
      <form data-testid="add-movie-form">
        <TitleInput value={ title } handleChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } handleChange={ this.handleChange } />
        <ImageInput value={ imagePath } handleChange={ this.handleChange } />
        {/* <StorylineInput value={ storyline } handleCHange={ this.handleChange } /> */}
      </form>
    );
  }
}

export default AddMovie;
