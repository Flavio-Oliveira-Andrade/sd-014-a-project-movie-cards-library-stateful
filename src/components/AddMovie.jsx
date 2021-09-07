import React from 'react';
import PropTypes from 'prop-types';
import AddMovieFormInput from './AddMovieFormInput';
import AddMovieFormTextarea from './AddMovieFormTextarea';
import setupFormInputs from './addMovieInputSetup';

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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { eventListener } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const {
      titleInput,
      subtitleInput,
      imageInput,
      // ratingInput,
      textareaInput,
    } = setupFormInputs;
    return (
      <div>
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
        <p>{ rating }</p>
        <p>{ genre }</p>
        <p>{ eventListener }</p>
        <form data-testid="add-movie-form" />
      </div>
    );
  }
}

AddMovie.defaultProps = {
  eventListener: '',
};

AddMovie.propTypes = {
  eventListener: PropTypes.func,
};

export default AddMovie;
