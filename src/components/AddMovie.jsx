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
        <label data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            value={ subtitle }
            onChange={ this.state.subtitle }
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
