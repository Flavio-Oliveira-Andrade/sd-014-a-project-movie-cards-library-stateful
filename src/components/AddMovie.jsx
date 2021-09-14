import React from 'react';
import InputTitle from './InputTitle';
import InputSubTitle from './InputSubTitle';
import InputImage from './InputImage';
import InputStoryLine from './InputStoryLine';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

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

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { imagePath, title, subtitle, storyline, rating, genre } = this.state;

    return (
      <main>
        <form data-testid="add-movie-form">
          <InputTitle title={ title } handleChange={ this.handleChange } />
          <InputSubTitle title={ subtitle } handleChange={ this.handleChange } />
          <InputImage title={ imagePath } handleChange={ this.handleChange } />
          <InputStoryLine title={ storyline } handleChange={ this.handleChange } />
          <InputRating title={ rating } handleChange={ this.handleChange } />
          <InputGenre title={ genre } handleChange={ this.handleChange } />
        </form>
      </main>
    );
  }
}

export default AddMovie;
