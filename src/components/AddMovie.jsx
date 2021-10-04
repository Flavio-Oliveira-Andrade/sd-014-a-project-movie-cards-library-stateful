import React, { Component } from 'react';
import MovieForm from './MovieForm';
import SecondMovieForm from './SecondMovieForm';

class AddMovie extends Component {
  constructor() {
    super();
    this.changeState = this.changeState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onclick } = this.props;
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
      </form>

    );
  }
}

export default AddMovie;
