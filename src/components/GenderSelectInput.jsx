import React from 'react';
import PropTypes from 'prop-types';
import genderList from '../configData';

class GenderSelectInput extends React.Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label htmlFor="genderSelect" data-testid="select-input-label">
        Filtrar por gênero :
        <select
          name="genderSelect"
          id="genderSelect"
          value={ value }
          onChange={ handler }
          data-testid="select-input"
        >
          {genderList.map(({ gender, text }) => (
            <option
              value={ gender }
              key={ gender }
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
