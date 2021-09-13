import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import AddRating from './AddRating';
import Genre from './Genre';
// import Button from './Button';

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
    this.onClick = this.onClick.bind(this);
    // this.submitNewMovie = this.submitNewMovie.bind(this);
  }

  onClick(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // submitNewMovie() {
  //   const { onClick } = this.props;
  //   onClick(this.state);
  // }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onClick={ this.onClick } />
        <Subtitle value={ subtitle } onClick={ this.onClick } />
        <ImagePath value={ imagePath } onClick={ this.onClick } />
        <Storyline value={ storyline } onClick={ this.onClick } />
        <AddRating value={ rating } onClick={ this.onClick } />
        <Genre value={ genre } onClick={ this.onClick } />
        {/* <Button onClick={ this.submitNewMovie } /> */}
      </form>
    );
  }
}

AddMovie.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default AddMovie;
