import React from 'react';
import PropTypes from 'prop-types';
import { genres, addGenreTestIds } from '../configData';

import NewMovieTextInputs from './NewMovieTextInputs';
import StoryLineInput from './StoryLineInput';
import RatingInput from './RatingInput';
import GenreSelectInput from './GenreSelectInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.reset = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value, type } = target;
    this.setState({ [name]: type === 'number' ? parseFloat(value) : value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.reset);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" className="d-flex flex-column py-2 px-4">
        <NewMovieTextInputs
          handler={ this.handleChange }
          values={ [title, subtitle, imagePath] }
        />

        <StoryLineInput value={ storyline } handler={ this.handleChange } />

        <RatingInput value={ rating } handler={ this.handleChange } />

        <GenreSelectInput
          value={ genre }
          handler={ this.handleChange }
          genreList={ genres.slice(1) }
          testIds={ addGenreTestIds }
          title="Gênero:"
          name="genre"
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
          className="btn btn-primary"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
