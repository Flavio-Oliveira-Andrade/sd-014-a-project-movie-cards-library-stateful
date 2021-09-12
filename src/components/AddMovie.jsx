import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'action',
      imagePath: '',
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { genre, imagePath, title, subtitle, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle title={ title } handleChange={ this.handleChange } />
        <AddMovieSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <AddMovieImage imagePath={ imagePath } handleChange={ this.handleChange } />
        <AddMovieStoryline storyline={ storyline } handleChange={ this.handleChange } />
        <AddMovieRating rating={ rating } handleChange={ this.handleChange } />
        <AddMovieGenre genre={ genre } handleChange={ this.handleChange } />
        <button
          data-testid="send-button"
          onClick={ this.handleSubmit }
          type="submit"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
