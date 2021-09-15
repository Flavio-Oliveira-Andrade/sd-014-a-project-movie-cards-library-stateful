import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import SubTitle from './SubTitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';
import RatingForm from './RatingForm';
import Genre from './Genre';
import Button from './Button';

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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick(event) {
    const { onClick } = this.props;
    onClick();

    event.preventDefault();

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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <SubTitle value={ subtitle } onChange={ this.handleChange } />
        <ImagePath value={ imagePath } onChange={ this.handleChange } />
        <StoryLine value={ storyline } onChange={ this.handleChange } />
        <RatingForm value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
