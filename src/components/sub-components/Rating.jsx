import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rati">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          id="rati"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Rating;
