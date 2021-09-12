import React from 'react';
import PropTypes from 'prop-types';
import InputImagem from './inputComponents/inputImagem';
import InputRating from './inputComponents/inputRating';
import InputStoryline from './inputComponents/inputStoryline';
import InputSubtitle from './inputComponents/inputSubtitle';
import InputTitle from './inputComponents/inputTitle';
import InputGenre from './inputComponents/inputGenre';
import SubmitButton from './inputComponents/submitButton';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = (initialState);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
        <InputImagem value={ imagePath } onChange={ this.handleChange } />
        <InputStoryline value={ storyline } onChange={ this.handleChange } />
        <InputRating value={ rating } onChange={ this.handleChange } />
        <InputGenre value={ genre } onChange={ this.handleChange } />
        <SubmitButton onClick={ this.handleSubmit } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
