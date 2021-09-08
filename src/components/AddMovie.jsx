// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieComponens/Title';
import Subtitle from './AddMovieComponens/Subtitle';
import Image from './AddMovieComponens/Image';
import Story from './AddMovieComponens/Story';
import Rating from './AddMovieComponens/Rating';
import Genre from './AddMovieComponens/Genre';
// import Button from './AddMovieComponens/Button';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;

    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      // https://github.com/tryber/sd-012-project-movie-cards-library-stateful/tree/LuisFernando-movie-cards-library-s-stateful
      // Meu amigo Luis Fernando me instruiu a fazer varios componentes para facilitar a leitura e o entendimento do funcionamento do React. Muito obrigado.
      <form data-testid="add-movie-form">
        <Title
          title={ title }
          titleChange={ this.handleChange }
        />
        <Subtitle
          subtitle={ subtitle }
          subtitleChange={ this.handleChange }
        />
        <Image
          image={ imagePath }
          imageChange={ this.handleChange }
        />
        <Story
          storyline={ storyline }
          storyChange={ this.handleChange }
        />
        <Rating
          rating={ rating }
          ratingChange={ this.handleChange }
        />
        <Genre
          genre={ genre }
          genreChange={ this.handleChange }
        />
        <button type="submit" onClick={ this.handleClick } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired };

export default AddMovie;
