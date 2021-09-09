import React from 'react';
import PropTypes from 'prop-types';

class FormRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          value={ value }
          onChange={ onChange }
          data-testid="rating-input"
          type="number"
          name="rating"
          id="rating"
        />
      </label>
    );
  }
}

FormRating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormRating;
