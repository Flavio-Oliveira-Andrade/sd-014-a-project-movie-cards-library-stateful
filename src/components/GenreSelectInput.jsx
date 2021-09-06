import React from 'react';
import PropTypes from 'prop-types';
import genreList from '../configData';

class GenderSelectInput extends React.Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label htmlFor="genreSelect" data-testid="select-input-label">
        Filtrar por gênero :
        <select
          name="genreSelect"
          id="genreSelect"
          value={ value }
          onChange={ handler }
          data-testid="select-input"
        >
          {genreList.map(({ genre, text }) => (
            <option
              value={ genre }
              key={ genre }
              data-testid="select-option"
            >
              {text}
            </option>
          ))}
        </select>
      </label>

    );
  }
}

GenderSelectInput.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.string,
};

GenderSelectInput.defaultProps = {
  handler: () => undefined,
  value: '',
};

export default GenderSelectInput;
