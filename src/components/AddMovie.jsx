import React from 'react';
import PropTypes from 'prop-types';
import FormFirstPart from './FormFirstPart';
import RatingBar from './RatingBar';

class AddMovie extends React.Component {
  constructor() {
    super();

    // INITIAL_STATE

    this.state = {
      subtitle: 'Subtítulo ...',
      title: 'Digite Título ...',
      imagePath: '      Copi e cole " html://Imagem . . . "',
      storyline: 'Sinopse ...',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    // if(event.target.value !== '') {}
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    this.setState({ [event.target.name]: '' });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: 'Subtítulo',
      title: 'Título',
      imagePath: 'Imagem',
      storyline: 'Sinopse',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" className="movie-card">
        <label
          htmlFor="image-input"
          data-testid="image-input-label"
          className="movie-card-image"
        >
          <input
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleChange }
            onClick={ this.handleClick }
            type="text"
            data-testid="image-input"
            className="movie-card-image"
          />
        </label>
        <FormFirstPart
          title={ title }
          subtitle={ subtitle }
          storyline={ storyline }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        <RatingBar
          genre={ genre }
          rating={ rating }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
