import React from 'react';
import PropTypes from 'prop-types';
import TitleForm from './TitleForm';
import SubtitleForm from './SubtitleForm';
import ImageForm from './ImageForm';
import SinopseForm from './SinopseForm';
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <TitleForm value={ title } onChange={ this.handleChange } />
        <SubtitleForm value={ subtitle } onChange={ this.handleChange } />
        <ImageForm value={ imagePath } onChange={ this.handleChange } />
        <SinopseForm value={ storyline } onChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
