import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import AddRating from './AddRating';
import Genre from './Genre';
import Button from './Button';

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
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addNewMovie() {
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
      <form data-testid="add-movie-form">
        <Title value={ title } onClick={ this.handleChange } />
        <Subtitle value={ subtitle } onClick={ this.handleChange } />
        <ImagePath value={ imagePath } onClick={ this.handleChange } />
        <Storyline value={ storyline } onClick={ this.handleChange } />
        <AddRating value={ rating } onClick={ this.handleChange } />
        <Genre value={ genre } onClick={ this.handleChange } />
        <Button onClick={ this.addNewMovie } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
