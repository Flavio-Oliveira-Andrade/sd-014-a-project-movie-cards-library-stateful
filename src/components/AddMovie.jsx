import React from 'react';

class AddMovie extends React.Component {
// subtitle: '';
  // title: '';
  // imagePath: '';
  // storyline: '';
  // rating: 0;
  // genre: 'action'

  render() {
    <AddMovie onClick={ () => { } } />;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleLabel" data-testid="title-input-label">
          Título:
          <input
            type="text"
            value={ title }
            onChange={ this.state.title }
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
