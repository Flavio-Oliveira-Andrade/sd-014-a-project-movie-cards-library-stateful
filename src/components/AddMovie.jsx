import React from 'react';
import PropTypes from 'prop-types';

import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';
import SubmitButton from './SubmitButton';

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

  // Consultei: https://pt-br.reactjs.org/docs/handling-events.html
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput
            title={ title }
            handleChange={ this.handleChange }
          />

          <SubtitleInput
            subtitle={ subtitle }
            handleChange={ this.handleChange }
          />

          <ImageInput
            imagePath={ imagePath }
            handleChange={ this.handleChange }
          />

          <StorylineInput
            storyline={ storyline }
            handleChange={ this.handleChange }
          />

          <RatingInput
            rating={ rating }
            handleChange={ this.handleChange }
          />

          <GenreInput
            genre={ genre }
            handleChange={ this.handleChange }
          />

          <SubmitButton
            handleClick={ this.handleClick }
          />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
