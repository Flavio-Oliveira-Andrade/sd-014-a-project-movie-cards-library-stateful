import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { inputRating, handleChange } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="inputRating">
          Avaliação
          <input
            type="text"
            name="inputRating"
            id="inputRating"
            data-testid="rating-input"
            value={ inputRating }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

InputRating.propTypes = {
  inputRating: PropTypes.number,
  handleChange: PropTypes.func,
};

InputRating.defaultProps = {
  inputRating: 0,
  handleChange: () => {},
};

export default InputRating;
