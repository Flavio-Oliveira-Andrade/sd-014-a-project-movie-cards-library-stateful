// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import FormTitle from './FormTitle';
import FormSubtitle from './FormSubtitle';
import FormImage from './FormImage';
import FormStoryline from './FormStoryline';
import FormRating from './FormRating';
import FormGenre from './FormGenre';

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
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  formSubmit(event) {
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
        <button data-testid="send-button" type="submit" onClick={ this.formSubmit }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
