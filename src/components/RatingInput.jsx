import React from '.react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return(
      <label htmlFor="rating">
        Avaliação
      </label>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}.isRequire;

export default RatingInput;
