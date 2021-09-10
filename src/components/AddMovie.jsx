import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.genericHandler = this.genericHandler.bind(this);
  }

  genericHandler({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="Título" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.genericHandler }
            name="title"
          />
        </label>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
