// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './sub-components/Title';
import Subtitle from './sub-components/Subtitle';
import ImagePath from './sub-components/ImagePath';
import StoryLine from './sub-components/StoryLine';
import Rating from './sub-components/Rating';
import Genre from './sub-components/Genre';
import Button from './sub-components/Button';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const oshiro = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: oshiro,
    });
  }

  handleSubmit(event) {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { state:
      { title,
        subtitle,
        imagePath,
        storyLine,
        rating,
        genre,
      } } = this;
    return (
      <form data-testid="add-movie-form">

        <Title handleChange={ this.handleChange } value={ title } />

        <Subtitle handleChange={ this.handleChange } value={ subtitle } />

        <ImagePath handleChange={ this.handleChange } value={ imagePath } />

        <StoryLine handleChange={ this.handleChange } value={ storyLine } />

        <Rating handleChange={ this.handleChange } value={ rating } />

        <Genre handleChange={ this.handleChange } value={ genre } />

        <Button onClick={ this.handleSubmit } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
