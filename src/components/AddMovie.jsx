import React from 'react';
import InputTitle from './InputTitle';

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
        </form>
      </main>
    );
  }
}

export default AddMovie;
