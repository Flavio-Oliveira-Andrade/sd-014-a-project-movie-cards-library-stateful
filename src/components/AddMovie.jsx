// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';
import AddMovieButton from './AddMovieButton';

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
    this.saveState = this.saveState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.saveState({ key: name, value: (target.value) });
  }

  handleClick() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  saveState(content) {
    const { key, value } = content;
    this.setState({
      [`${key}`]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <AddMovieTitle
            title={ title }
            handleChanceTitle={ this.handleChange }
          />
          <AddMovieSubtitle
            subtitle={ subtitle }
            handleChanceSubtitle={ this.handleChange }
          />
          <AddMovieImage
            imagePath={ imagePath }
            handleChanceImagePath={ this.handleChange }
          />
          <AddMovieStoryline
            storyline={ storyline }
            handleChanceStoryline={ this.handleChange }
          />
          <AddMovieRating
            rating={ rating }
            handleChanceRating={ this.handleChange }
          />
          <AddMovieGenre
            genre={ genre }
            handleChanceGenre={ this.handleChange }
          />
          <AddMovieButton
            onClick={ onClick }
            handleClick={ this.handleClick }
          />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
