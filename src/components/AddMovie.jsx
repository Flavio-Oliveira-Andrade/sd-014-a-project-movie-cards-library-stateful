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

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleSubtitleChange = (event) => {
    this.setState({ subtitle: event.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre} = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="add-movie-form" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            value={ title }
            onChange={ this.handleTitleChange }
          />
        </label>

        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleSubtitleChange }
          />
        </label>
      </form>

    );
  }
}

export default AddMovie;
