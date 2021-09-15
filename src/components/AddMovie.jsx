import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubTitle from './InputSubTitle';
import InputImage from './InputImage';
import InputStoryLine from './InputStoryLine';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick = () => {
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { imagePath, title, subtitle, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputTitle title={ title } handleChange={ this.handleChange } />
        <InputSubTitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <InputImage imagePath={ imagePath } handleChange={ this.handleChange } />
        <InputStoryLine storyline={ storyline } handleChange={ this.handleChange } />
        <InputRating rating={ rating } handleChange={ this.handleChange } />
        <InputGenre genre={ genre } handleChange={ this.handleChange } />
        <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
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
