import React from 'react';
import PropTypes from 'prop-types';

class AddRating extends React.Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação:
        <input
          value={ value }
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          onChange={ onClick }
        />
      </label>
    );
  }
}

AddRating.propTypes = ({
  value: PropTypes.number,
  onClick: PropTypes.func,
}).isRequired;

export default AddRating;
