import React from 'react';

class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          value={ value }
          data-testid="rating-input"
          name="rating"
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingInput;
