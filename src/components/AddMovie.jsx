import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormsConstructor from './FormsConstructor';

class AddMovie extends Component {
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
  }

  loadText = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { subtitle, title,
      imagePath, storyline, rating,
      genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <FormsConstructor
          nome={ ['title', 'Título', title] }
          load={ this.loadText }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
