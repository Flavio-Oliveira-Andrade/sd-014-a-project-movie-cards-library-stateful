import React from 'react';
import PropTypes from 'prop-types';

class Favorite extends React.Component {
  render() {
    const { title, bookmarked, callback } = this.props;
    return (
      <label htmlFor="favorite-checkbox">
        <input
          id={ title }
          name={ title }
          type="checkbox"
          checked={ bookmarked }
          onChange={ callback }
        />
        Favorito
      </label>
    );
  }
}

Favorite.defaultProps = {
  callback: () => (undefined),
  bookmarked: false,
};

Favorite.propTypes = {
  title: PropTypes.string.isRequired,
  bookmarked: PropTypes.bool,
  callback: PropTypes.func,
};

export default Favorite;
