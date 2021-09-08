import React from 'react';
import Title from './AddMovieComponents/Title';
import Subtitle from './AddMovieComponents/Subtitle';
import ImagePath from './AddMovieComponents/ImagePath';
// import PropTypes from 'prop-types';

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
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title
            title={ title }
            titleChange={ this.handleChange }
          />
          <Subtitle
            subtitle={ subtitle }
            subtitleChange={ this.handleChange }
          />
          <ImagePath
            imagePath={ imagePath }
            imagePathChange={ this.handleChange }
          />
        </form>
      </div>

    );
  }
}

export default AddMovie;
