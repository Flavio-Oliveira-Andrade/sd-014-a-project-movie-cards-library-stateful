// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: 'action',
    };
  }

handleChange = ({ target }) => {
  console.log('teste');
}

render() {
  const { onClick } = this.props;
  return (
    <form data-testid="add-movie-form">
      <label data-testid="title-input-label" htmlFor="title-input-label">
        Título
        <input
          id="title-input-label"
          type="text"
          value={ this.state.title }
          onChange={ this.handleChange }
          data-testid="title-input"
        />
      </label>
      <label data-testid="image-input-label" htmlFor="image-input-label">
        Imagem
        <input
          id="image-input-label"
          type="text"
          value={ this.state.imagePath }
          onChange={ this.handleChange }
          data-testid="image-input"
        />
      </label>
    </form>
  );
}
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
