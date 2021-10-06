import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

AddMovieRating.propTypes = { rating: PropTypes.number }.isRequired;

AddMovieRating.defaultProps = { rating: 'undefined' };

export default AddMovieRating;
