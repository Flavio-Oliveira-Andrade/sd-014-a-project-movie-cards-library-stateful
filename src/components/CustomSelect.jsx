import React from 'react';
import PropTypes from 'prop-types';

class CustomSelect extends React.Component {
  render() {
    const { name, value, onChange, labelText, options } = this.props;
    return (
      <label data-testid={ `${name}-label` } htmlFor={ name }>
        { labelText }
        <select
          id={ name }
          data-testid={ name }
          value={ value }
          onChange={ onChange }
        >
          {Object.entries(options).map(
            ([optionName, optionValue]) => (
              <option
                key={ optionValue }
                value={ optionValue }
                data-testid="select-option"
              >
                { optionName }
              </option>
            ),
          )}
        </select>
      </label>
    );
  }
}

CustomSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default CustomSelect;
