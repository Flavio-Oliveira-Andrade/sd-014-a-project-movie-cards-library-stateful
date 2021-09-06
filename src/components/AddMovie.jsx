import React from 'react';
import PropTypes from 'prop-types';
import TitleForm from './TitleForm';
import SubtitleForm from './SubtitleForm';
import ImageForm from './ImageForm';
import SinopseForm from './SinopseForm';
import RatingForm from './RatingForm';
import GenreForm from './GenreForm';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
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

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <TitleForm value={ title } onChange={ this.handleChange } />
        <SubtitleForm value={ subtitle } onChange={ this.handleChange } />
        <ImageForm value={ imagePath } onChange={ this.handleChange } />
        <SinopseForm value={ storyline } onChange={ this.handleChange } />
        <RatingForm value={ rating } onChange={ this.handleChange } />
        <GenreForm value={ genre } onChange={ this.handleChange } />
        <button type="submit" data-testid="send-button">
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
