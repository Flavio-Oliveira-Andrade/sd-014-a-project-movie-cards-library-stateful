import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import InputGenre from './InputGenre';
import InputImage from './InputImage';
import InputRating from './InputRating';
import InputStoryline from './InputStoryline';
import InputSubtitle from './InputSubtitle';
import InputTitle from './InputTitle';

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

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
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

    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
        <InputImage value={ imagePath } onChange={ this.handleChange } />
        <InputStoryline value={ storyline } onChange={ this.handleChange } />
        <InputRating value={ rating } onChange={ this.handleChange } />
        <InputGenre value={ genre } onChange={ this.handleChange } />
        <Button onClick={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
