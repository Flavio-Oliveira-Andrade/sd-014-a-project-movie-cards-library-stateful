import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating,
      genre, onClick, handleChange } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="inputTitle">
          Título
          <input
            type="text"
            name="inputTitle"
            id="inputTitle"
            data-testid="title-input"
            value={ title }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="inputSubtitle">
          Subtítulo
          <input
            type="text"
            name="inputSubtitle"
            id="inputSubtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  onClick: PropTypes.func,
  handleChange: PropTypes.func,
};

AddMovie.defaultProps = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
  onClick: () => {},
  handleChange: () => {},
};

export default AddMovie;
