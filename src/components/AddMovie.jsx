// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import FormTitle from './FormTitle';
import FormSubtitle from './FormSubtitle';
import FormImage from './FormImage';
import FormStoryline from './FormStoryline';
import FormRating from './FormRating';
import FormGenre from './FormGenre';
import FormButton from './FormButton';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = (initialState);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name } = event.target; // acessa name de value
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    // Requisito 6 ao 13
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <FormTitle value={ title } onChange={ this.handleChange } />
        <FormSubtitle value={ subtitle } onChange={ this.handleChange } />
        <FormImage value={ imagePath } onChange={ this.handleChange } />
        <FormStoryline value={ storyline } onChange={ this.handleChange } />
        <FormRating value={ rating } onChange={ this.handleChange } />
        <FormGenre value={ genre } onChange={ this.handleChange } />
        {/* Requisito 14 */}
        <FormButton onClick={ this.handleSubmit } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
