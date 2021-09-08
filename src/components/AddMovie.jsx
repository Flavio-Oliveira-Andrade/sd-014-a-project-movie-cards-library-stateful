import React from 'react';
import movies from '../data';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';
import SendInput from './SendButton';

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
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addMovie() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    movies.push({
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked: false,
      genre,
    });
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
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput value={ title } onChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
        <ImageInput value={ imagePath } onChange={ this.handleChange } />
        <StorylineInput value={ storyline } onChange={ this.handleChange } />
        <RatingInput value={ rating } onChange={ this.handleChange } />
        <GenreInput onChange={ this.handleChange } />
        <SendInput onClick={ this.addMovie } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
