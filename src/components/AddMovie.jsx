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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="new-movie-title" data-testid="title-input-label">
          Título
          <input
            id="new-movie-title"
            type="text"
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="new-movie-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="new-movie-subtitle"
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
