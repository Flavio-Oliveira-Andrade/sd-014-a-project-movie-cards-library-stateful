import React from 'react';
import PropTypes from 'prop-types';
import AddMovieFormInput from './AddMovieFormInput';
import AddMovieFormTextarea from './AddMovieFormTextarea';
import AddMovieFormSelect from './AddMovieFormSelect';
import AddMovieFormButton from './AddMovieFormButton';
import setupFormInputs from './addMovieInputSetup';

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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value, type } = target;
    this.setState({
      [name]: type === 'number' ? Number(value) : value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const movie = this.state;
    let test = true;
    Object.entries(movie).forEach(([key, value]) => {
      if (value === '' && key !== 'imagePath') {
        test = false;
      }
    });
    if (test) {
      const { onClick } = this.props;
      onClick(movie);
      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      });
    }
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { titleInput, subtitleInput, imageInput, ratingInput, textareaInput,
      selectInput,
      formButton,
    } = setupFormInputs;
    return (
      <form data-testid="add-movie-form" id="add-movie-form" name="add-movie-form">
        <AddMovieFormInput
          options={ titleInput }
          value={ title }
          callback={ this.handleChange }
        />
        <AddMovieFormInput
          options={ subtitleInput }
          value={ subtitle }
          callback={ this.handleChange }
        />
        <AddMovieFormInput
          options={ imageInput }
          value={ imagePath }
          callback={ this.handleChange }
        />
        <AddMovieFormTextarea
          options={ textareaInput }
          value={ storyline }
          callback={ this.handleChange }
        />
        <AddMovieFormInput
          options={ ratingInput }
          value={ rating }
          callback={ this.handleChange }
        />
        <AddMovieFormSelect
          options={ selectInput }
          value={ genre }
          callback={ this.handleChange }
        />
        <AddMovieFormButton
          options={ formButton }
          callback={ this.handleClick }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
