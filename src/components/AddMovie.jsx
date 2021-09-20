import React, { Component } from 'react';

class AddMovie extends Component {
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
  }

  changeTitle({ target }) {
    const { name } = target;
    this.setState({
      [name]: name.value,
    });
  }

  render() {
    // const { onclick } = this.props;
    const { title } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="titleInput"
            value={ title }
            onChange={ this.changeTitle }
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
