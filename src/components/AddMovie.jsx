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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(state) {
    console.table(state);
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
    const { eventListener } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { titleInput, subtitleInput, imageInput, ratingInput, textareaInput,
      selectInput,
      formButton,
    } = setupFormInputs;
    return (
      <form data-testid="add-movie-form" id="add-movie-form">
        <AddMovieFormInput
          options={ titleInput }
          value={ title }
          eventListener={ this.handleChange }
        />
        <AddMovieFormInput
          options={ subtitleInput }
          value={ subtitle }
          eventListener={ this.handleChange }
        />
        <AddMovieFormInput
          options={ imageInput }
          value={ imagePath }
          eventListener={ this.handleChange }
        />
        <AddMovieFormTextarea
          options={ textareaInput }
          value={ storyline }
          eventListener={ this.handleChange }
        />
        <AddMovieFormInput
          options={ ratingInput }
          value={ rating }
          eventListener={ this.handleChange }
        />
        <AddMovieFormSelect
          options={ selectInput }
          value={ genre }
          eventListener={ this.handleChange }
        />
        <AddMovieFormButton
          options={ formButton }
          eventListeners={ () => {
            eventListener(this.state);
            this.handleClick(this.state);
          } }
        />
      </form>
    );
  }
}

AddMovie.defaultProps = {
  // eventListener: (state) => console.log(`AddMovie ${state}`),
  eventListener: (state) => console.log(`AddMovie ${Object.keys(state)}`),
};

AddMovie.propTypes = {
  eventListener: PropTypes.func,
};

export default AddMovie;
