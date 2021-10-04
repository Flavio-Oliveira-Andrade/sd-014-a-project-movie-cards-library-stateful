import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieForm from './MovieForm';
import SecondMovieForm from './SecondMovieForm';

class AddMovie extends Component {
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
    this.changeState = this.changeState.bind(this);
    this.onclick = this.onclick.bind(this);
  }

  onclick(event) {
    const { onClick } = this.props;
    onClick(this.state);
    event.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <MovieForm
          titleValue={ title }
          subtitleValue={ subtitle }
          imagePathValue={ imagePath }
          storylineValue={ storyline }
          handleChange={ this.changeState }
        />
        <SecondMovieForm
          ratingValue={ rating }
          genreValue={ genre }
          handleChange={ this.changeState }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.onclick }
        >
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
