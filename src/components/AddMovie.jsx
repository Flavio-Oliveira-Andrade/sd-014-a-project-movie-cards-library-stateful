import React from 'react';
import PropTypes from 'prop-types';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';
import TitleInput from './TitleInput';
import Sinopse from './Sinopse';
import Image from './Image';
import Subtitle from './Subtitle';

const stateInitial = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = stateInitial;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form
        data-testid="add-movie-form"
        onSubmit={this.handleSubmit}
        className="add"
      >
        <TitleInput value={title} onChange={this.handleChange} />
        <Subtitle value={subtitle} onChange={this.handleChange} />
        <Image value={imagePath} onChange={this.handleChange} />
        <Sinopse value={storyline} onChange={this.handleChange} />
        <RatingInput value={rating} onChange={this.handleChange} />
        <GenreInput value={genre} onChange={this.handleChange} />
        <button
          className="button"
          type="submit"
          data-testid="send-button"
          onClick={this.handleSubmit}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
