import React from 'react';
import Titulo from './Titulo';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo value={ title } onClick={ this.onClick } />
      </form>
    );
  }
}

export default AddMovie;
