import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleEvent = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      // storyline,
      // rating,
      // genre
    } = this.state;
    return (
      // item 7
      <form data-testid="add-movie-form">
        {/* item 8 */}
        <label htmlFor="addMovieTitle" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="addMovieTitle"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleEvent }
          />
        </label>
        {/* item 9 */}
        <label htmlFor="addMovieSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleEvent }
          />
        </label>
        {/* item 10 */}
        <label htmlFor="addImage" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleEvent }
          />

        </label>
      </form>
    );
  }
}

export default AddMovie;
