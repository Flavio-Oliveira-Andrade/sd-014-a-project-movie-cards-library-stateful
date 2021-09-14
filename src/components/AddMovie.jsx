import React from 'react';
import PropTypes from 'prop-types';
import ImagePath from './ImagePath';
import RatingInput from './RatingInput';
import Subtitle from './Subtitle';
import TextArea from './TextArea';
import Title from './Title';
import Genero from './Genero';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onclick(this.state);
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <ImagePath value={ imagePath } onChange={ this.handleChange } />
        <TextArea value={ storyline } onChange={ this.handleChange } />
        <RatingInput value={ rating } onChange={ this.handleChange } />
        <Genero value={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
        >
          Adicionar Filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onclick: PropTypes.func }.isRequired;

export default AddMovie;
