import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryline from './AddMovieStoryline';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: '',
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

  render() {
    const { genre, imagePath, title, subtitle, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle title={ title } handleChange={ this.handleChange } />
        <AddMovieSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <AddMovieImage imagePath={ imagePath } handleChange={ this.handleChange } />
        <AddMovieStoryline storyline={ storyline } handleChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
