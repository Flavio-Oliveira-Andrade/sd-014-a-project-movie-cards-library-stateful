import React, { Component } from 'react';
import TitleInputA from './TitleInputA';
import SubtitleInputA from './SubtitleInputA';
import ImageInputA from './ImageInputA';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInputA value={ title } onChange={ this.handleChange } />
        <SubtitleInputA value={ subtitle } onChange={ this.handleChange } />
        <ImageInputA value={ imagePath } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
