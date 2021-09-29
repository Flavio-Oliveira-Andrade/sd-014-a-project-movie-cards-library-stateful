// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Componet {
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
      <form className="add-movie-form" data-testid="add-movie-form">

      </form>
    );
  }
}

export default AddMovie;
