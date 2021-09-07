import React from 'react';

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
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor data-testid="title-input-label">
          Título
          <input type="text" data-testid="title-input" onChange={ title } />
          { title }
        </label>
      </form>
    );
  }
}

export default AddMovie;
