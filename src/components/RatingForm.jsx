import React from 'react';
import PropTypes from 'prop-types';

class RatingForm extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={ value }
            data-testid="rating-input"
            onChange={ onChange }
            name="rating"
          />
        </label>
      </div>
    );
  }
}

RatingForm.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingForm;
