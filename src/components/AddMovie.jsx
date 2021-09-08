import React, { Component } from 'react';

class AddMovie extends Component {
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
  }

  render() {
    return (
      <form>
        <label htmlFor="titulo">
          <input type="text" id="titulo" value={ this.state.title } />
        </label>
      </form>
    );
  }
}

export default AddMovie;