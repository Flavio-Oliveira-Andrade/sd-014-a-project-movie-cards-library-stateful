import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
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
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onClick={ this.onClick } />
        <Subtitle value={ subtitle } onClick={ this.onClick } />
        <ImagePath value={ imagePath } onClick={ this.onClick } />
      </form>
    );
  }
}

export default AddMovie;
