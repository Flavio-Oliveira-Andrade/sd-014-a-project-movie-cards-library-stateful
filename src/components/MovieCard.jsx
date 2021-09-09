import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import Favorite from './Favorite';

class MovieCard extends React.Component {
  render() {
    const { movie, callback } = this.props;
    const { title, subtitle, storyline, rating, imagePath, bookmarked } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Favorite title={ title } bookmarked={ bookmarked } callback={ callback } />
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  callback: () => (undefined),
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
  }).isRequired,
  callback: PropTypes.func,
};

export default MovieCard;
