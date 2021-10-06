// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';
import AddMovieButton from './AddMovieButton';

class AddMovie extends Component {
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
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = (event) => {
    const { onClick } = this.props;
    onClick(this.state);
    event.preventDefault();
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
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form className="add-movie-form" data-testid="add-movie-form">
        <AddMovieTitle value={ title } handleChange={ this.handleChange } />
        <AddMovieSubtitle value={ subtitle } handleChange={ this.handleChange } />
        <AddMovieImage value={ imagePath } handleChange={ this.handleChange } />
        <AddMovieStoryline value={ storyline } handleChange={ this.handleChange } />
        <AddMovieRating value={ rating } handleChange={ this.handleChange } />
        <AddMovieGenre value={ genre } handleChange={ this.handleChange } />
        <AddMovieButton handleClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
