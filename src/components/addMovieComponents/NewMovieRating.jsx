import React from 'react';
import PropTypes from 'prop-types';

class NewMovieRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ onChange }
          name="rating"
        />
      </label>
    );
  }
}

NewMovieRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NewMovieRating;
