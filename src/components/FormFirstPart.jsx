import React from 'react';
import PropTypes from 'prop-types';

class FormFirstPart extends React.Component {
  render() {
    const { title, subtitle, storyline, handleChange, handleClick } = this.props;
    return (
      <div className="movie-card-body">
        <label
          htmlFor="title-input"
          data-testid="title-input-label"
          className="movie-card-title"
        >
          {/* Título */}
          <input
            name="title"
            value={ title }
            onChange={ handleChange }
            onClick={ handleClick }
            type="text"
            data-testid="title-input"
            className="movie-card-title"
          />
        </label>
        <label
          htmlFor="subtitle-input"
          data-testid="subtitle-input-label"
          className="movie-card-subtitle"
        >
          {/* Subtítulo */}
          <input
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
            onClick={ handleClick }
            type="text"
            data-testid="subtitle-input"
            className="movie-card-subtitle"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          {/* Sinopse */}
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ handleChange }
            onClick={ handleClick }
            data-testid="storyline-input"
            className="movie-card-storyline"
          />
        </label>
      </div>
    );
  }
}

FormFirstPart.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FormFirstPart;
