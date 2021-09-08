import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieComponents/Title';
import Subtitle from './AddMovieComponents/Subtitle';
import ImagePath from './AddMovieComponents/ImagePath';
import Storyline from './AddMovieComponents/Storyline';
import Rating from './AddMovieComponents/Rating';
import Genre from './AddMovieComponents/Genre';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleClick(event) {
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
          <Storyline
            storyline={ storyline }
            storylineChange={ this.handleChange }
          />
          <Rating
            rating={ rating }
            ratingChange={ this.handleChange }
          />
          <Genre
            genre={ genre }
            genreChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="send-button"
            onClick={ this.handleClick }
          >
            Adicionar filme
          </button>
        </form>
      </div>

    );
  }
}
AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
